# Endpoint Draft

## Public

- `GET /health`
- `GET /api/talents?q=`
- `GET /api/talents/:id`
- `GET /api/alumni`
- `GET /api/alumni/map`
- `GET /api/tour-locations`
- `GET /api/testimonials`

## AI

- `POST /api/ai/major-consultation`
  - body: `{ "interest": "saya suka coding dan membuat aplikasi" }`
- `POST /api/ai/industry-talent-search`
  - body: `{ "need": "web developer" }`

## Admin Roadmap

- `POST /api/auth/login`
- `POST /api/admin/upload`
- CRUD talents, alumni, achievements, projects, articles, tour, testimonials.
