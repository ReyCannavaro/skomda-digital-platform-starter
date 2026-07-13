import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { db } from "./db/client";
import { alumni, talents, tourLocations, testimonials } from "./db/schema";
import { eq, ilike, or } from "drizzle-orm";

const PORT = Number(process.env.API_PORT ?? 4000);
const WEB_ORIGIN = process.env.WEB_ORIGIN ?? "http://localhost:3000";

const app = new Elysia()
  .use(cors({ origin: WEB_ORIGIN }))
  .use(swagger({
    documentation: {
      info: {
        title: "SKOMDA Digital Platform API",
        version: "0.1.0",
      },
    },
  }))
  .get("/health", () => ({ ok: true, service: "skomda-api" }))

  // Talent Hub
  .get("/api/talents", async ({ query }) => {
    const q = query.q?.trim();
    if (!q) return db.select().from(talents).limit(20);

    return db
      .select()
      .from(talents)
      .where(or(ilike(talents.name, `%${q}%`), ilike(talents.major, `%${q}%`), ilike(talents.dtpProgram, `%${q}%`)))
      .limit(20);
  }, {
    query: t.Object({ q: t.Optional(t.String()) })
  })
  .get("/api/talents/:id", async ({ params, set }) => {
    const [talent] = await db.select().from(talents).where(eq(talents.id, Number(params.id))).limit(1);
    if (!talent) {
      set.status = 404;
      return { message: "Talent not found" };
    }
    return talent;
  })

  // Alumni Journey Map
  .get("/api/alumni", async () => db.select().from(alumni).limit(100))
  .get("/api/alumni/map", async () => db.select().from(alumni).limit(100))

  // Virtual School Experience
  .get("/api/tour-locations", async () => db.select().from(tourLocations).limit(50))

  // Testimonial Wall
  .get("/api/testimonials", async () => db.select().from(testimonials).limit(20))

  // AI Konsultasi Jurusan - stub awal supaya frontend sudah bisa integrasi
  .post("/api/ai/major-consultation", async ({ body }) => {
    const interest = body.interest.toLowerCase();
    const prefersCoding = interest.includes("coding") || interest.includes("aplikasi") || interest.includes("software");
    const prefersNetwork = interest.includes("jaringan") || interest.includes("fiber") || interest.includes("telekomunikasi");

    if (prefersCoding && !prefersNetwork) {
      return {
        recommendation: "SIJA",
        confidence: 82,
        reason: "Jawaban menunjukkan ketertarikan pada aplikasi, sistem informasi, dan pengembangan solusi digital.",
        disclaimer: "Hasil ini panduan awal, tetap konsultasikan dengan guru BK atau guru jurusan.",
      };
    }

    if (prefersNetwork && !prefersCoding) {
      return {
        recommendation: "TJAT",
        confidence: 80,
        reason: "Jawaban menunjukkan ketertarikan pada jaringan, telekomunikasi, perangkat, dan praktik infrastruktur.",
        disclaimer: "Hasil ini panduan awal, tetap konsultasikan dengan guru BK atau guru jurusan.",
      };
    }

    return {
      recommendation: "Perlu eksplorasi lebih lanjut",
      confidence: 60,
      reason: "Minat kamu masih seimbang. Sistem menyarankan melihat profil TJAT dan SIJA terlebih dahulu.",
      disclaimer: "Hasil ini panduan awal, tetap konsultasikan dengan guru BK atau guru jurusan.",
    };
  }, {
    body: t.Object({ interest: t.String() })
  })

  // AI Agent Industri - stub awal
  .post("/api/ai/industry-talent-search", async ({ body }) => {
    const q = body.need.trim();
    const candidates = await db
      .select()
      .from(talents)
      .where(or(ilike(talents.summary, `%${q}%`), ilike(talents.major, `%${q}%`), ilike(talents.dtpProgram, `%${q}%`)))
      .limit(5);

    return {
      need: q,
      candidates,
      note: "Ini masih pencarian awal berbasis data Talent Hub. Tahap berikutnya bisa ditingkatkan dengan AI/RAG.",
    };
  }, {
    body: t.Object({ need: t.String() })
  })
  .listen(PORT);

console.log(`SKOMDA API running at http://localhost:${PORT}`);
