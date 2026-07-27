---
title: Secrets and Deployment Notes
---

# Secrets and Deployment Notes

No real passwords, tokens, private keys, or credentials are stored in this repository.

## Future Secrets

Deployment will likely need secrets in GitHub Actions later:

- SFTP host
- SFTP username
- SFTP password or private key
- SFTP target path
- Optional deployment port

## Important

Do not commit secrets to Markdown files, source files, `.env` files, or workflow files. Store them as GitHub Actions repository secrets when deployment is added later.

