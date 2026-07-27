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

## Future Deployment Notes

Deployment is not configured yet.

Later, deployment should be added with GitHub Actions and SFTP. Required secrets should be stored as GitHub Actions repository secrets, not committed to this repository.

Expected future secrets:

- `SFTP_HOST`
- `SFTP_USERNAME`
- `SFTP_PASSWORD` or `SFTP_PRIVATE_KEY`
- `SFTP_TARGET_PATH`
- `SFTP_PORT` if the server does not use the default port

Do not add these values until the deployment workflow is created.

