# Déploiement sur Hostinger (etiquette.estim.pro)

L'app **et** son API vivent sur le sous-domaine `etiquette.estim.pro` :

```
etiquette.estim.pro/
├── index.html, assets/, sw.js, …   ← l'app (build du front)
├── .htaccess                       ← routage du SPA
└── api/
    ├── index.php                   ← l'API (PHP + SQLite)
    └── data/
        ├── .htaccess               ← bloque l'accès web au dossier
        └── letiquette.sqlite       ← base de données (créée toute seule)
```

- **Backend** : PHP + SQLite, un seul fichier (`api/index.php`). Le fichier
  SQLite est créé automatiquement au premier appel. Aucune base à provisionner.
- **Sécurité** : le code d'accès n'est jamais renvoyé au navigateur ; il est
  haché côté serveur (`password_hash`). Les écritures exigent un jeton de session.
- **Déploiement** : automatique via GitHub Actions (`.github/workflows/deploy-hostinger.yml`),
  à chaque push sur `main`. La base de données **n'est jamais écrasée** (exclue
  des synchronisations).

---

## 1. Activer le HTTPS du sous-domaine

Dans hPanel → **Sécurité → SSL**, assure-toi que `etiquette.estim.pro` a un
certificat actif. C'est indispensable (et la copie GitHub Pages, en HTTPS, ne
peut appeler l'API que si elle est aussi en HTTPS).

## 2. Trouver le chemin du sous-domaine (DEPLOY_PATH)

C'est le dossier servi par `etiquette.estim.pro`. En général :

```
/home/u170442813/domains/etiquette.estim.pro/public_html
```

Pour le vérifier en SSH :

```
ssh -p 65002 u170442813@72.60.93.206
ls -d ~/domains/etiquette.estim.pro/public_html
```

## 3. Créer une clé SSH de déploiement

Sur ta machine (ou dans Cloud Shell), génère une paire dédiée :

```
ssh-keygen -t ed25519 -f hostinger_deploy -C "github-actions" -N ""
```

- **Clé publique** (`hostinger_deploy.pub`) → hPanel → **Avancé → Accès SSH →
  Clés SSH → Importer**, ou ajoute-la à `~/.ssh/authorized_keys` du serveur.
- **Clé privée** (`hostinger_deploy`) → secret GitHub (étape suivante).

Vérifie que la clé fonctionne :

```
ssh -i hostinger_deploy -p 65002 u170442813@72.60.93.206 'echo OK'
```

## 4. Ajouter les secrets GitHub

Dépôt → **Settings → Secrets and variables → Actions → New repository secret** :

| Secret                  | Valeur (exemple)                                                   |
| ----------------------- | ------------------------------------------------------------------ |
| `HOSTINGER_SSH_HOST`    | `72.60.93.206`                                                     |
| `HOSTINGER_SSH_PORT`    | `65002`                                                            |
| `HOSTINGER_SSH_USER`    | `u170442813`                                                       |
| `HOSTINGER_SSH_KEY`     | *contenu de la clé privée `hostinger_deploy`* (avec en-têtes)       |
| `HOSTINGER_DEPLOY_PATH` | `/home/u170442813/domains/etiquette.estim.pro/public_html`         |

## 5. Lancer le déploiement

- **Automatique** : à chaque push sur `main`.
- **Manuel / test** : onglet **Actions → Deploy to Hostinger → Run workflow**,
  en choisissant la branche. Pratique pour tester avant de fusionner.

Le workflow :

1. construit le front (`npm run build`, base `/`, API `/api/`) ;
2. envoie `dist/` vers le sous-domaine (sans toucher à `/api`) ;
3. envoie `api/` (sans toucher à `letiquette.sqlite`).

## 6. Vérifier

- Ouvre `https://etiquette.estim.pro` → l'app se charge, écran d'accès.
- Test rapide de l'API :

  ```
  curl -s https://etiquette.estim.pro/api/ -H 'Content-Type: application/json' \
    -d '{"action":"list"}'
  ```

  doit répondre `{"players":[]}` (puis la liste, une fois des profils créés).

- Crée un profil depuis l'app, ouvre le **Classement** : il est commun à tous.

### Permissions

Sur hébergement mutualisé, le dossier `api/data/` et son fichier SQLite
appartiennent à ton utilisateur : PHP peut écrire sans réglage particulier. Si
jamais une erreur d'écriture apparaît, donne les droits au dossier :

```
chmod 755 ~/domains/etiquette.estim.pro/public_html/api/data
```

---

## Notes

- **Profils existants** : les anciens profils créés en local (navigateur) ne
  sont pas repris — recrée-les une fois (rapide).
- **Inscription ouverte** : n'importe qui connaissant l'URL peut créer un
  profil. Pour un cercle fermé, on pourra ajouter un « code d'invitation »
  partagé à l'inscription — dis-le-moi si tu le souhaites.
- **Développement local** : voir `.env.example`.
