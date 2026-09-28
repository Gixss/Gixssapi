# Gixssapi

Portal dokumentasi API untuk developer dengan katalog endpoint, URL otomatis, playground request, dan status layanan.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/gixssapi/src/App.tsx` — aplikasi portal dan navigasi dokumentasi.
- `artifacts/gixssapi/src/index.css` — token visual dan layout responsif.
- `artifacts/api-server/src/routes/catalog.ts` — katalog dan status API publik.
- `vercel.json` — konfigurasi build/deploy Vercel untuk frontend.

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

Gixssapi membantu developer menemukan endpoint API, membaca dokumentasi, mencoba parameter, menyalin URL yang otomatis mengikuti domain website, dan melihat status layanan.

## User preferences

- Nama produk: Gixssapi.
- Nama developer: Gixss.
- Kontak owner: 6282322985264.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
