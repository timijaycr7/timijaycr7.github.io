# Run or share the portfolio with Docker

Install Docker Desktop on Windows/macOS (use Linux containers), or Docker Engine
with the Compose plugin on Linux. Start Docker before running these commands.
This packages the portfolio website, including its images. The linked AI project
repositories are separate applications and are not included.

## Run from the source folder

Open a terminal in the extracted folder containing `compose.yaml`:

```sh
docker compose up -d --build
```

Visit http://localhost:8080/#experience (or any other portfolio tab).
The first build needs internet to download the Nginx base image.

```sh
docker compose ps
docker compose logs --tail=50
docker compose down
```

After editing website files, run `docker compose up -d --build` again.
The container runs as an unprivileged user, with a read-only filesystem,
temporary runtime storage, a health check, and automatic restart unless stopped.
Nginx serves compressed responses and revalidates cached files.

## Send to another computer

Two packages can be shared:

- `dist/timilehin-portfolio-source.zip`: extract it and run the source command
  above. Docker builds for the receiving computer's architecture.
- `dist/timilehin-portfolio-image.tar`: a prebuilt image, for offline use after
  Docker is installed. It targets the architecture of the computer that built it.
  For another architecture (for example Apple Silicon), use the source ZIP instead.

To create the image archive after building:

```sh
docker image save -o dist/timilehin-portfolio-image.tar timilehin-portfolio:1.0
```

On the receiving computer, put the image archive and `compose.yaml` in a folder,
open a terminal there, then run:

```sh
docker image load -i timilehin-portfolio-image.tar
docker compose up -d --no-build --pull never
```

Open http://localhost:8080. No Python, Node.js, or source build is needed for this
prebuilt-image method. Docker must still be running.

## Hosting on a server

The default port binds only to the local computer. To allow network access, create
a `.env` file beside `compose.yaml` containing:

```dotenv
PORTFOLIO_BIND=0.0.0.0
PORTFOLIO_PORT=8080
```

Then run `docker compose up -d`. Configure the server firewall and place an HTTPS
reverse proxy in front of port 8080 for a public domain. This container serves HTTP;
it does not provision a domain or TLS certificate. GitHub Pages continues to host
the static files independently and does not run this container.

Update the base image periodically with `docker compose build --pull`, then run
`docker compose up -d` and re-export the image archive. The archive preserves the
exact built image, while a new source build can pick up newer stable Nginx patches.

References: [official Nginx image](https://hub.docker.com/_/nginx/),
[Docker image loading](https://docs.docker.com/reference/cli/docker/image/load/).
