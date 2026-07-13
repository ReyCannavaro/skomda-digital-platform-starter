export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 md:flex-row md:items-center md:justify-between md:pb-28 md:pt-14">
        <div className="relative z-10 max-w-[610px]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-skomda-red shadow-[0_10px_28px_rgba(228,37,44,0.08)]">
            <span className="size-2 rounded-full bg-[var(--skomda-gradient-dot)]" />
            Sampoerna Foundation Schools at SMK Telkom Sidoarjo
          </p>
          <h1 className="max-w-[560px] text-[52px] font-black uppercase leading-[0.92] tracking-tight text-skomda-red sm:text-[72px] md:text-[86px]">
            School of Digital Era
          </h1>
          <p className="mt-6 max-w-[500px] text-[15px] font-medium leading-7 text-zinc-600 md:text-base">
            Setiap langkah panjang dimulai dari langkah kecil, sekolah vokasi yang membangun ekosistem digital untuk calon siswa, alumni, dan industri.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-[var(--skomda-gradient-main)] px-7 py-3.5 text-[12px] font-black uppercase tracking-wide text-white shadow-[0_16px_34px_rgba(228,37,44,0.28)] transition hover:-translate-y-0.5"
              href="/program/profil-jurusan"
            >
              Learn More
            </a>
            <a
              className="rounded-full border border-skomda-red bg-white px-7 py-3.5 text-[12px] font-black uppercase tracking-wide text-skomda-red transition hover:-translate-y-0.5 hover:bg-red-50"
              href="/school-tour"
            >
              Lihat Telkom Digital
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px] w-full max-w-[500px] md:min-h-[560px]">
          <div className="absolute left-[3%] top-[22%] hidden h-[40px] w-[40px] rounded-full bg-[var(--skomda-gradient-dot)] sm:block" />
          <div className="absolute left-[17%] top-[5%] h-[28px] w-[28px] rounded-full bg-[var(--skomda-gradient-dot)] md:h-[40px] md:w-[40px]" />
          <div className="absolute bottom-[22%] left-[14%] h-[40px] w-[40px] rounded-full bg-[var(--skomda-gradient-dot)]" />
          <div className="absolute bottom-[7%] left-[43%] h-[34px] w-[34px] rounded-full bg-[var(--skomda-gradient-dot)] md:h-[40px] md:w-[40px]" />
          <div className="absolute right-[5%] top-[3%] h-[106px] w-[76px] rounded-[400px] bg-[var(--skomda-gradient-pill)] md:h-[149px] md:w-[106px]" />
          <div className="absolute bottom-[4%] right-[2%] h-[112px] w-[78px] rounded-[400px] bg-[var(--skomda-gradient-pill)] md:h-[149px] md:w-[106px]" />
          <div className="absolute right-[36%] top-[13%] h-[149px] w-[106px] rounded-[400px] bg-[var(--skomda-gradient-pill)] shadow-[0_24px_45px_rgba(184,41,45,0.25)]" />
          <div className="absolute left-[26%] top-[28%] h-[149px] w-[106px] rounded-[400px] bg-[var(--skomda-gradient-pill)] shadow-[0_24px_45px_rgba(184,41,45,0.2)]" />
          <div className="absolute right-[23%] top-[23%] h-[260px] w-[106px] rounded-[400px] bg-[var(--skomda-gradient-tall)] md:h-[331.875px] md:w-[136.286px]">
            <div className="absolute inset-x-5 top-10 h-24 rounded-full bg-white/10 blur-xl" />
          </div>
          <div className="absolute left-[12%] top-[10%] h-[245px] w-[90px] rounded-[400px] border border-red-100 bg-white shadow-[0_20px_60px_rgba(17,24,39,0.08)] md:h-[331.875px] md:w-[136.286px]">
            <div className="absolute inset-3 rounded-[400px] bg-[linear-gradient(180deg,#fff_0%,#fff5f5_100%)]" />
            <div className="absolute bottom-8 left-1/2 h-24 w-16 -translate-x-1/2 rounded-full bg-[var(--skomda-gradient-main)] opacity-90 md:h-32 md:w-20" />
          </div>
        </div>
      </section>
    </main>
  );
}
