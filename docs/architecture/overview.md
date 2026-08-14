# Architecture Overview — Note Board

## Scope

"Note Board" is fullstack because saved notes live in PostgreSQL and UI must read them through backend service. Product has one function: display saved notes. No add, edit, delete, search, auth, or manual reload product control belongs in scaffold or later feature unless requirements change.

## Stack

- Frontend: Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS v3, ESLint.
- Backend: Go 1.22 module under `code/backend`, HTTP API, pgx PostgreSQL driver.
- Database: PostgreSQL 16.
- Runtime: `docker compose --profile local up` from repository root boots DB, backend, and frontend. Deployment uses injected `DATABASE_URL` instead of local Postgres.
- CI: `.github/workflows/ci.yml` runs backend build/vet/test, frontend lint/build/test, compose config validation, and CSS token guard.

## Repository Layout

```text
code/
  backend/
    cmd/api/main.go                 # Go HTTP entry point, one main package
    migrations/*.sql                # Embedded SQL migrations, filename order
    go.mod / go.sum                 # Backend module dependencies
    .env.example                    # Backend env contract
    Dockerfile                      # Fixed service image contract
  frontend/
    app/layout.tsx                  # App Router root layout
    app/page.tsx                    # Composition root only; story components mount here
    app/globals.css                 # Frozen shared design tokens and base styles
    components/                     # Story-owned PascalCase components later
    lib/mock/                       # Story mocks, deleted when API replaces them
    package.json / package-lock.json
    .env.example                    # Public frontend env contract
    Dockerfile                      # Fixed standalone Next runtime contract
docs/
  notes/SRS.md                      # Merged requirements
  architecture/overview.md          # This file
```

## Backend Foundation

`cmd/api/main.go` reads `DATABASE_URL`, opens PostgreSQL with pgx, applies every embedded `migrations/*.up.sql` migration, then listens on `PORT`, falling back to `APP_PORT`, then `8080`.

Migrations are tracked in `schema_migrations(version text primary key, applied_at timestamptz)`. Re-running server is no-op for already-applied files. Health check `/healthz` returns 200 only after migrations succeeded and current request can ping DB.

Only one `main` package exists: `code/backend/cmd/api`. Supporting packages may be added later under `internal/` when feature code needs them; Dockerfile builds `./cmd/api` binary.

## Frontend Foundation

`app/page.tsx` stays server component and composition root. Later story adds one import and one element. Feature UI belongs in `code/frontend/components/{PascalCase}.tsx` with `export default function ComponentName()`.

Client components must start with literal first line `"use client"` when using state, effects, event handlers, refs, or browser APIs. Server components cannot pass functions to children.

`app/globals.css` holds shared tokens from design system across all required categories: color, spacing, typography, radius, shadow, and motion. Story CSS must use `var(--token)` without fallbacks; hardcoded hex colors and token fallbacks in `*.module.css` fail CI.

## Environment Variables

Root `.env.example` is compose contract:

- `POSTGRES_USER` — local PostgreSQL user.
- `POSTGRES_PASSWORD` — local PostgreSQL password; local only, never commit secrets.
- `POSTGRES_DB` — local PostgreSQL database name.
- `BACKEND_PORT` — host port mapped to backend `8080`.
- `FRONTEND_PORT` — host port mapped to frontend `3000`.
- `NEXT_PUBLIC_API_URL` — browser-visible API base URL.

Backend `code/backend/.env.example`:

- `DATABASE_URL` — full PostgreSQL DSN injected by runtime/compose.
- `PORT` — HTTP listen port, preferred.
- `APP_PORT` — legacy fallback listen port if `PORT` unset.

Frontend `code/frontend/.env.example`:

- `NEXT_PUBLIC_API_URL` — browser base URL for backend API.

## Naming Conventions

- Go packages: lowercase, short names. Entry point remains `cmd/api`.
- SQL migrations: timestamp prefix plus action, `.up.sql` and `.down.sql` pairs.
- React components: PascalCase files, default exported named functions only.
- Component CSS: `{Component}.module.css`, story-owned only.
- Mock data: `code/frontend/lib/mock/{story-slug}.ts`, deleted when real API lands.
- Env vars: UPPER_SNAKE_CASE, listed in nearest service `.env.example` with comment.

## How To Run

```bash
cp .env.example .env
docker compose --profile local up --build
```

Frontend: `http://localhost:3000`. Backend health: `http://localhost:8080/healthz`.

Local checks without containers:

```bash
cd code/backend && go build ./... && go vet ./... && go test ./...
cd code/frontend && npm ci && npm run lint && npm run build && npm test --if-present
```

## Decisions And Tradeoffs

1. Fullstack shape selected.
   - Accepted: frontend + Go backend + PostgreSQL because requirement reads saved database notes.
   - Rejected: static-only frontend with mock notes. Lower cost, but violates database-backed saved notes and error/empty states from read service.
   - Rejected: frontend reading PostgreSQL directly. Not viable in browser and exposes DB credentials.

2. Backend self-migrates on boot.
   - Accepted: app applies embedded migrations before serving health.
   - Rejected: manual migration step. Simpler app code, but runtime starts with empty DB and no other phase applies schema.
   - Tradeoff: boot has DB dependency; health correctly fails until schema ready.

3. Minimal API skeleton only.
   - Accepted: `/healthz` only now; notes read endpoint belongs in service design/story backend.
   - Rejected: prebuilding `/notes` now. Would guess contract before service design and risk rework.

4. Next.js App Router server composition root.
   - Accepted: `app/page.tsx` only mounts story components.
   - Rejected: scaffolded finished page markup. Faster preview, but later story must rewrite shared file and collide with parallel work.

5. Tokens frozen in `globals.css`.
   - Accepted: all design token categories defined once.
   - Rejected: per-component raw values. Faster single component, but caused repeated review rejects and visual drift.

6. No new frontend UI dependency.
   - Accepted: Tailwind plus CSS modules later.
   - Rejected: component library. Faster widgets, but product has one read-only screen and approved custom design.

## Security, Reliability, Observability

- Secrets never committed; `.env.example` contains names and safe local defaults only.
- Backend uses PostgreSQL DSN from environment and parameterized pgx for future queries.
- Health proves DB connectivity, not only process liveness.
- Logs use Go `slog` for startup, migration, and serve failures.
- No auth by requirement; API must not add user/session assumptions later.

## Unknowns And Later Work

- Note ordering not defined by SRS; later service design should preserve returned DB order or define query order if PM approves.
- Seed data not part of scope. Empty DB must show empty state once feature exists.
- ERD and service contracts come next; this doc does not finalize endpoint or column details beyond bootstrap migration.
