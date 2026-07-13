const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

const features = [
  "Alumni Journey Map",
  "Talent Hub",
  "AI Konsultasi Jurusan",
  "AI Agent Industri",
  "Virtual School Experience",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-skomda-red">
            SKOMDA Digital Experience Platform
          </p>
          <h1 className="text-5xl font-black tracking-tight text-skomda-dark md:text-7xl">
            School of <span className="text-skomda-red">Digital Era</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Starter project untuk menghubungkan calon siswa, wali murid, alumni, talent, dan industri melalui website sekolah yang interaktif.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-skomda-red px-6 py-3 text-sm font-bold text-white" href="/program/profil-jurusan">
              Profil Jurusan
            </a>
            <a className="rounded-full border border-skomda-red px-6 py-3 text-sm font-bold text-skomda-red" href="/alumni/talent-hub">
              Talent Hub
            </a>
          </div>
        </div>
        <div className="grid w-full max-w-sm gap-3 rounded-3xl bg-red-50 p-6">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl bg-white p-4 font-bold text-skomda-red shadow-sm">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-black">API Endpoint Awal</h2>
        <p className="mt-2 text-zinc-600">Backend Elysia berjalan terpisah. Health check:</p>
        <code className="mt-4 block rounded-xl bg-zinc-100 p-4 text-sm">{API_BASE_URL}/health</code>
      </section>
    </main>
  );
}
