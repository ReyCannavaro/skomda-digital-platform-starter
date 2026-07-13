# SKOMDA Digital Platform Starter

Starter monorepo untuk website inovasi SMK Telkom Sidoarjo:

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Elysia.js + Bun
- Database: PostgreSQL + pgvector
- ORM: Drizzle ORM
- Deployment target: VPS + Docker Compose + Nginx

## Struktur

```txt
apps/
  web/        Next.js frontend
  api/        Elysia.js backend
packages/
  shared/     shared types/constants
infra/
  nginx/      contoh konfigurasi nginx
uploads/      local file storage untuk asset prototype
```

## Setup Lokal

1. Install Bun: https://bun.sh
2. Copy env:

```bash
cp .env.example .env
```

3. Jalankan database:

```bash
docker compose up -d postgres
```

4. Install dependencies:

```bash
bun install
cd apps/web && bun install
cd ../api && bun install
```

5. Generate dan migrate database:

```bash
bun run db:generate
bun run db:migrate
```

6. Run dev:

```bash
bun run dev
```

- Web: http://localhost:3000
- API: http://localhost:4000
- API health: http://localhost:4000/health

## Modul MVP

1. Alumni Journey Map
2. Talent Hub
3. AI Konsultasi Jurusan
4. AI Agent Industri
5. Virtual School Experience
6. Interactive Testimonial Wall
7. Achievement Spotlight
8. Hasil Karya Siswa & DTP

## Catatan

Starter ini belum mengimplementasikan semua UI final. Tujuannya adalah memberi struktur awal yang rapi untuk tim agar frontend, backend, database, dan deployment tidak berantakan.
