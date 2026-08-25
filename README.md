# WE7R5D

This repository includes a minimal Docker-hosted frontend baseline for Alloy sessions.

## Run

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The app listens on port `3000`. In Alloy, open the preview at `http://localhost:8080`.

Check container health with:

```sh
docker compose -f docker-compose.alloy.yaml ps
```
