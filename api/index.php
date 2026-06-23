<?php
// L'Étiquette — API minimale (PHP + SQLite) pour un classement partagé.
//
// Un seul fichier, une seule URL. Le client envoie une requête POST JSON
// { "action": "...", ... } et reçoit du JSON. Conçu pour de tout petits effectifs
// (quelques joueurs) sur hébergement mutualisé : zéro configuration de base de
// données, le fichier SQLite est créé tout seul au premier appel.
//
// Sécurité : le code d'accès n'est jamais renvoyé au client. Il est haché côté
// serveur (password_hash). Les écritures sont protégées par un jeton de session.
//
// Compatibilité : écrit pour PHP 8.0+ (pas de « never », d'enums, de readonly…).

declare(strict_types=1);

ini_set('display_errors', '0');
$DEBUG = getenv('LETIQUETTE_DEBUG') === '1';

// ---------------------------------------------------------------------------
// En-têtes : JSON + CORS (lecture publique du classement ; les écritures sont
// de toute façon protégées par jeton, donc une origine large est sans risque).
// ---------------------------------------------------------------------------
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ---------------------------------------------------------------------------
// Helpers de réponse
// ---------------------------------------------------------------------------
function send($payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail(string $message, int $status = 400): void
{
    send(['error' => $message], $status);
}

function now_ms(): int
{
    return (int) round(microtime(true) * 1000);
}

// ---------------------------------------------------------------------------
// Pseudo : normalisation (insensible casse/accents) + validation.
// Doit rester cohérent avec normalizePseudo()/validatePseudo() côté client.
// ---------------------------------------------------------------------------
function normalize_pseudo(string $s): string
{
    $s = trim($s);
    $s = function_exists('mb_strtolower') ? mb_strtolower($s, 'UTF-8') : strtolower($s);

    if (class_exists('Normalizer')) {
        $d = \Normalizer::normalize($s, \Normalizer::FORM_D);
        if ($d !== false) {
            $s = preg_replace('/\p{Mn}+/u', '', $d);
        }
    } else {
        // Repli sans l'extension intl : translittération des accents courants.
        $s = strtr($s, [
            'à' => 'a', 'á' => 'a', 'â' => 'a', 'ä' => 'a', 'ã' => 'a', 'å' => 'a',
            'ç' => 'c', 'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e',
            'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i',
            'ñ' => 'n', 'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'ö' => 'o', 'õ' => 'o',
            'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ü' => 'u', 'ý' => 'y', 'ÿ' => 'y',
            'œ' => 'oe', 'æ' => 'ae',
        ]);
    }
    return $s;
}

function validate_pseudo(string $p): ?string
{
    $t = trim($p);
    $len = function_exists('mb_strlen') ? mb_strlen($t, 'UTF-8') : strlen($t);
    if ($len < 2) {
        return 'Au moins 2 caractères, je vous prie.';
    }
    if ($len > 24) {
        return '24 caractères maximum.';
    }
    if (!preg_match("/^[\p{L}\p{N} '._-]+$/u", $t)) {
        return 'Lettres, chiffres et espaces uniquement.';
    }
    return null;
}

function validate_pin(string $pin): ?string
{
    if (!preg_match('/^\d+$/', $pin)) {
        return 'Le code ne doit contenir que des chiffres.';
    }
    $l = strlen($pin);
    if ($l < 2) {
        return 'Au moins 2 chiffres, je vous prie.';
    }
    if ($l > 10) {
        return '10 chiffres maximum.';
    }
    return null;
}

// ---------------------------------------------------------------------------
// Base de données (SQLite via PDO)
// ---------------------------------------------------------------------------
function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0775, true);
    }

    $pdo = new PDO('sqlite:' . $dir . '/letiquette.sqlite');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('PRAGMA journal_mode=WAL');
    $pdo->exec('PRAGMA busy_timeout=5000');
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS players (
            id          TEXT PRIMARY KEY,
            pseudo      TEXT NOT NULL,
            pseudo_norm TEXT NOT NULL UNIQUE,
            pin_hash    TEXT NOT NULL,
            created_at  INTEGER NOT NULL,
            token       TEXT,
            modules     TEXT NOT NULL DEFAULT "{}",
            final       TEXT NOT NULL DEFAULT "{}"
        )'
    );
    return $pdo;
}

/** Construit l'objet « joueur public » envoyé au client (sans hash ni jeton). */
function public_player(array $row): array
{
    $modules = json_decode(($row['modules'] ?? '') !== '' ? $row['modules'] : '{}');
    if (!($modules instanceof stdClass)) {
        $modules = new stdClass();
    }
    $final = json_decode(($row['final'] ?? '') !== '' ? $row['final'] : 'null');
    if (!($final instanceof stdClass)) {
        $final = (object) ['bestScore' => 0, 'passed' => false, 'attempts' => 0];
    }
    return [
        'id' => $row['id'],
        'pseudo' => $row['pseudo'],
        'createdAt' => (int) $row['created_at'],
        'modules' => $modules,
        'final' => $final,
    ];
}

function all_players(PDO $db): array
{
    $rows = $db->query('SELECT * FROM players ORDER BY created_at ASC')
        ->fetchAll(PDO::FETCH_ASSOC);
    return array_map('public_player', $rows);
}

function row_by_id(PDO $db, string $id): ?array
{
    $stmt = $db->prepare('SELECT * FROM players WHERE id = ?');
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    return $row ?: null;
}

function row_by_token(PDO $db, string $token): ?array
{
    if ($token === '') {
        return null;
    }
    $stmt = $db->prepare('SELECT * FROM players WHERE token = ?');
    $stmt->execute([$token]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    return $row ?: null;
}

/** Exige un jeton valide ; renvoie la ligne du joueur ou termine en 401. */
function require_player(PDO $db, array $in): array
{
    $token = (string) ($in['token'] ?? '');
    if ($token === '' && isset($_SERVER['HTTP_AUTHORIZATION'])) {
        if (preg_match('/Bearer\s+(.+)/i', $_SERVER['HTTP_AUTHORIZATION'], $m)) {
            $token = trim($m[1]);
        }
    }
    $row = row_by_token($db, $token);
    if (!$row) {
        fail('Session expirée. Reconnectez-vous.', 401);
    }
    return $row;
}

/** Nettoie/borne un résultat de quiz reçu du client. */
function sanitize_result($r): array
{
    if (!is_array($r)) {
        fail('Résultat invalide.', 422);
    }
    $score = (float) ($r['score'] ?? 0);
    if ($score < 0) {
        $score = 0.0;
    }
    if ($score > 1) {
        $score = 1.0;
    }
    $total = (int) ($r['total'] ?? 0);
    if ($total < 0) {
        $total = 0;
    }
    $correct = (int) ($r['correct'] ?? 0);
    if ($correct < 0) {
        $correct = 0;
    }
    if ($correct > $total) {
        $correct = $total;
    }
    return [
        'score' => $score,
        'correct' => $correct,
        'total' => $total,
        'passed' => (bool) ($r['passed'] ?? false),
        'at' => (int) ($r['at'] ?? now_ms()),
    ];
}

// ---------------------------------------------------------------------------
// Routage
// ---------------------------------------------------------------------------
try {
    $raw = file_get_contents('php://input');
    $in = json_decode($raw ?: 'null', true);
    if (!is_array($in)) {
        $in = [];
    }
    $action = (string) ($in['action'] ?? ($_GET['action'] ?? ''));
    $db = db();

    switch ($action) {
        // ---- Classement / liste publique ---------------------------------
        case 'list':
            send(['players' => all_players($db)]);
            break;

        // ---- Profil courant (rafraîchissement via jeton) -----------------
        case 'me':
            $row = require_player($db, $in);
            send(['player' => public_player($row)]);
            break;

        // ---- Inscription -------------------------------------------------
        case 'register': {
            $pseudo = (string) ($in['pseudo'] ?? '');
            $pin = (string) ($in['pin'] ?? '');
            if ($e = validate_pseudo($pseudo)) {
                fail($e, 422);
            }
            if ($e = validate_pin($pin)) {
                fail($e, 422);
            }
            $norm = normalize_pseudo($pseudo);

            $check = $db->prepare('SELECT 1 FROM players WHERE pseudo_norm = ?');
            $check->execute([$norm]);
            if ($check->fetchColumn()) {
                fail('Ce nom est déjà pris.', 409);
            }

            $id = bin2hex(random_bytes(16));
            $hash = password_hash($pin, PASSWORD_DEFAULT);
            $final = json_encode((object) ['bestScore' => 0, 'passed' => false, 'attempts' => 0]);
            try {
                $ins = $db->prepare(
                    'INSERT INTO players (id, pseudo, pseudo_norm, pin_hash, created_at, token, modules, final)
                     VALUES (?, ?, ?, ?, ?, NULL, "{}", ?)'
                );
                $ins->execute([$id, trim($pseudo), $norm, $hash, now_ms(), $final]);
            } catch (PDOException $e) {
                // Course sur l'index unique pseudo_norm.
                fail('Ce nom est déjà pris.', 409);
            }

            send(['player' => public_player(row_by_id($db, $id)), 'players' => all_players($db)]);
            break;
        }

        // ---- Connexion ---------------------------------------------------
        case 'login': {
            $id = (string) ($in['id'] ?? '');
            $pin = (string) ($in['pin'] ?? '');
            $row = row_by_id($db, $id);
            if (!$row) {
                fail('Profil introuvable.', 404);
            }
            if (!password_verify($pin, $row['pin_hash'])) {
                fail('Code incorrect.', 401);
            }
            $token = bin2hex(random_bytes(32));
            $db->prepare('UPDATE players SET token = ? WHERE id = ?')->execute([$token, $id]);
            send([
                'token' => $token,
                'player' => public_player($row),
                'players' => all_players($db),
            ]);
            break;
        }

        // ---- Renommer le profil courant ----------------------------------
        case 'rename': {
            $row = require_player($db, $in);
            $pseudo = (string) ($in['pseudo'] ?? '');
            if ($e = validate_pseudo($pseudo)) {
                fail($e, 422);
            }
            $norm = normalize_pseudo($pseudo);
            $check = $db->prepare('SELECT 1 FROM players WHERE pseudo_norm = ? AND id <> ?');
            $check->execute([$norm, $row['id']]);
            if ($check->fetchColumn()) {
                fail('Ce nom est déjà pris.', 409);
            }
            $db->prepare('UPDATE players SET pseudo = ?, pseudo_norm = ? WHERE id = ?')
                ->execute([trim($pseudo), $norm, $row['id']]);
            send([
                'player' => public_player(row_by_id($db, $row['id'])),
                'players' => all_players($db),
            ]);
            break;
        }

        // ---- Changer le code d'accès -------------------------------------
        case 'setPin': {
            $row = require_player($db, $in);
            $pin = (string) ($in['pin'] ?? '');
            if ($e = validate_pin($pin)) {
                fail($e, 422);
            }
            $hash = password_hash($pin, PASSWORD_DEFAULT);
            $db->prepare('UPDATE players SET pin_hash = ? WHERE id = ?')
                ->execute([$hash, $row['id']]);
            send([
                'player' => public_player(row_by_id($db, $row['id'])),
                'players' => all_players($db),
            ]);
            break;
        }

        // ---- Enregistrer un résultat de module ---------------------------
        case 'progressModule': {
            $row = require_player($db, $in);
            $moduleId = (string) ($in['moduleId'] ?? '');
            if ($moduleId === '') {
                fail('Module manquant.', 422);
            }
            $result = sanitize_result($in['result'] ?? null);
            $mod = json_decode(($row['modules'] ?? '') !== '' ? $row['modules'] : '{}', true);
            if (!is_array($mod)) {
                $mod = [];
            }
            $prev = $mod[$moduleId] ?? null;
            $mod[$moduleId] = [
                'bestScore' => max((float) ($prev['bestScore'] ?? 0), $result['score']),
                'passed' => (bool) ($prev['passed'] ?? false) || $result['passed'],
                'attempts' => (int) ($prev['attempts'] ?? 0) + 1,
                'lastResult' => $result,
            ];
            $db->prepare('UPDATE players SET modules = ? WHERE id = ?')
                ->execute([json_encode((object) $mod), $row['id']]);
            send([
                'player' => public_player(row_by_id($db, $row['id'])),
                'players' => all_players($db),
            ]);
            break;
        }

        // ---- Enregistrer un résultat d'examen final ----------------------
        case 'progressFinal': {
            $row = require_player($db, $in);
            $result = sanitize_result($in['result'] ?? null);
            $fin = json_decode(($row['final'] ?? '') !== '' ? $row['final'] : '{}', true);
            if (!is_array($fin)) {
                $fin = [];
            }
            $wasCertified = (bool) ($fin['passed'] ?? false);
            $next = [
                'bestScore' => max((float) ($fin['bestScore'] ?? 0), $result['score']),
                'passed' => $wasCertified || $result['passed'],
                'attempts' => (int) ($fin['attempts'] ?? 0) + 1,
                'lastResult' => $result,
            ];
            if (isset($fin['certifiedAt'])) {
                $next['certifiedAt'] = $fin['certifiedAt'];
            } elseif ($result['passed']) {
                $next['certifiedAt'] = $result['at'];
            }
            $db->prepare('UPDATE players SET final = ? WHERE id = ?')
                ->execute([json_encode((object) $next), $row['id']]);
            send([
                'player' => public_player(row_by_id($db, $row['id'])),
                'players' => all_players($db),
            ]);
            break;
        }

        // ---- Envoyer le code par email (jamais stocké) -------------------
        case 'sendPin': {
            $email = trim((string) ($in['email'] ?? ''));
            $pseudo = trim((string) ($in['pseudo'] ?? ''));
            $pin = (string) ($in['pin'] ?? '');
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                fail('Adresse email invalide.', 422);
            }
            if ($pseudo === '') {
                fail('Pseudo manquant.', 422);
            }
            if ($e = validate_pin($pin)) {
                fail($e, 422);
            }
            $subject = '=?UTF-8?B?' . base64_encode("Mon code d'accès — L'Étiquette") . '?=';
            $body = "Bonjour,\r\n\r\n"
                . "Voici le code d'accès à votre profil \xc2\xab\xc2\xa0{$pseudo}\xc2\xa0\xc2\xbb sur L'Étiquette :\r\n\r\n"
                . "Code : {$pin}\r\n\r\n"
                . "Conservez-le précieusement pour retrouver votre progression depuis n'importe quel appareil.\r\n\r\n"
                . "\xe2\x80\x94 L'Étiquette";
            $headers = implode("\r\n", [
                'MIME-Version: 1.0',
                'Content-Type: text/plain; charset=UTF-8',
                "From: L'Étiquette <noreply@etiquette.estim.pro>",
                'X-Mailer: PHP/' . PHP_VERSION,
            ]);
            $ok = @mail($email, $subject, $body, $headers);
            if (!$ok) {
                fail("Impossible d'envoyer l'email. Notez votre code manuellement.", 500);
            }
            send(['ok' => true]);
            break;
        }

        // ---- Déconnexion (invalide le jeton) -----------------------------
        case 'logout': {
            $token = (string) ($in['token'] ?? '');
            if ($token !== '') {
                $db->prepare('UPDATE players SET token = NULL WHERE token = ?')->execute([$token]);
            }
            send(['ok' => true]);
            break;
        }

        default:
            fail('Action inconnue.', 404);
    }
} catch (Throwable $e) {
    fail($DEBUG ? ('Erreur serveur : ' . $e->getMessage()) : 'Erreur serveur.', 500);
}
