# AI Agent Instructions

This repository contains a Markdown-based static knowledge website for a future company and history wiki.

Docusaurus generates the website from Markdown and MDX source files into static production files.

## Project Structure

- `docs/` contains wiki articles and section category metadata.
- `docs/history/` contains company timeline, milestones, and historical source notes.
- `docs/products/` contains product pages, release notes, and ownership notes.
- `docs/people/` contains team, role, contributor, and editorial ownership notes.
- `docs/technologies/` contains technology stack and operations notes.
- `src/pages/` contains custom Docusaurus pages, including the homepage.
- `src/css/` contains global styling overrides.
- `static/` contains static assets such as icons and images.
- `.github/workflows/` contains GitHub Actions workflows.

## Content Rules

- Write articles in clear English.
- Use descriptive headings and short opening summaries.
- Use meaningful filenames that describe the page topic.
- Add internal links to related wiki pages when useful.
- Add alt text for every image.
- Preserve existing content unless the user explicitly asks to change it.

## Security Rules

- Do not commit passwords, tokens, SSH keys, hosting credentials, or other secrets.
- Do not add real credentials to Markdown files, source files, environment files, or workflow files.
- Document secret names only when needed; store real secret values outside the repository.

## Verification Rules

- Run the production build before considering a task complete:

```bash
npm run build
```

- If dependencies need to be installed from scratch, use the lockfile-based install:

```bash
npm ci
```

## Deployment Rules

- Deployment must only happen through GitHub Actions from the `main` branch.
- Direct automatic publishing by AI agents is not allowed unless the user explicitly requests it.
- Do not configure deployment, SFTP, or credentials unless the user explicitly asks for that work.

