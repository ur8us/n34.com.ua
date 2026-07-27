# N34 Wiki Prototype

Minimal Docusaurus prototype for a future static Markdown-based company and history wiki.

This repository intentionally contains only test content. Do not add real passwords, tokens, private keys, or other credentials.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run start
```

3. Open the local URL printed by Docusaurus, usually:

```text
http://localhost:3000/
```

## Wiki Structure

Markdown pages live in `docs/`:

- `docs/history/` - company timeline, milestones, and historical notes
- `docs/products/` - products, release notes, and ownership notes
- `docs/people/` - teams, roles, contributors, and editorial ownership
- `docs/technologies/` - technical stack and operations notes

The homepage lives in `src/pages/index.js`.

## Build Static Files

Create a production static build:

```bash
npm run build
```

Docusaurus writes the generated static site to:

```text
build/
```

You can preview the production build locally:

```bash
npm run serve
```

## Continuous Integration

GitHub Actions checks every pull request and every push to `main`.

The workflow installs dependencies from the npm lockfile and builds the production Docusaurus site.

Pushes to `main` and manual runs from `main` also deploy the generated `build/` directory using `lftp`. Pull requests only install dependencies and build the site; they never deploy.

### Deployment Configuration

Deployment uses FTP or FTPS through `lftp`. Do not commit credentials to the repository.

Add these repository secrets in GitHub under `Settings` -> `Secrets and variables` -> `Actions` -> `Secrets`:

- `FTP_HOST`
- `FTP_PORT`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR`

Add this repository variable under `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`:

- `FTP_PROTOCOL` with value `ftp` or `ftps`

For this site, `FTP_REMOTE_DIR` should point to the domain document root:

```text
/www.n34.com.ua
```

To run deployment manually, open the repository on GitHub, go to `Actions`, select the `Build` workflow, choose `Run workflow`, and run it from the `main` branch.

The deployment intentionally does not use `mirror --delete` yet. This avoids deleting unrelated files that may already exist in the remote directory.

## Future Deployment Notes

Deployment uses GitHub Actions and `lftp`. Required secrets must be stored as GitHub Actions repository secrets, not committed to this repository.

Expected future secrets:

- `FTP_HOST`
- `FTP_PORT`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_REMOTE_DIR`

Do not add secret values to source files, Markdown files, environment files, or workflow files.
