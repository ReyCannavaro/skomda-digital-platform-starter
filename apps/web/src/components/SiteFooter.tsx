import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const mainMenu = ["Beranda", "Profil Sekolah", "Program", "Berita", "Virtual Tour", "Kontak"];
const newsLinks = ["Prestasi", "Pengumuman", "Kegiatan", "Artikel Siswa", "PPDB"];
const hours = ["Senin - Kamis 07.00 - 15.00", "Jumat 07.00 - 14.00", "Sabtu sesuai agenda sekolah"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 text-zinc-700">
      <div className="absolute left-1/2 top-0 flex w-[115vw] -translate-x-1/2 -rotate-3 items-center justify-center gap-5 bg-skomda-red px-6 py-3 text-[12px] font-black uppercase tracking-wide text-white shadow-lg sm:text-sm">
        <span>Terakreditasi A</span>
        <span className="text-white/70">✦</span>
        <span>SMK Pusat Keunggulan</span>
        <span className="text-white/70">✦</span>
        <span>Center of Artificial Intelligence</span>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 md:grid-cols-[1.35fr_0.8fr_0.9fr_1.2fr]">
        <section>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="SMK Telkom Sidoarjo">
            <span className="grid size-11 place-items-center rounded-xl bg-skomda-red text-sm font-black text-white">
              TS
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-black text-zinc-900">SMK Telkom</span>
              <span className="block text-sm font-bold text-skomda-red">Sidoarjo</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
            Sekolah vokasi berbasis teknologi yang menyiapkan talenta digital, berkarakter, dan berwawasan global.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <a className="flex items-center gap-3 hover:text-skomda-red" href="tel:+62318970000">
              <Phone className="size-4 text-skomda-red" />
              (031) 897 0000
            </a>
            <a className="flex items-center gap-3 hover:text-skomda-red" href="mailto:info@smktelkom-sda.sch.id">
              <Mail className="size-4 text-skomda-red" />
              info@smktelkom-sda.sch.id
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-skomda-red" />
              Jl. Raya Pecantingan, Sekardangan, Sidoarjo
            </p>
          </div>
          <div className="mt-6 flex gap-2">
            {["IG", "FB", "YT", "TT"].map((item) => (
              <a
                key={item}
                href="#"
                className="grid size-9 place-items-center rounded-full border border-red-100 text-[11px] font-black text-skomda-red transition hover:bg-skomda-red hover:text-white"
                aria-label="Media sosial SMK Telkom Sidoarjo"
              >
                {item}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-wide text-zinc-900">Menu Utama</h2>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-zinc-500">
            {mainMenu.map((item) => (
              <Link key={item} href="/" className="transition hover:text-skomda-red">
                {item}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-wide text-zinc-900">Berita Sekolah</h2>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-zinc-500">
            {newsLinks.map((item) => (
              <Link key={item} href="/#berita" className="transition hover:text-skomda-red">
                {item}
              </Link>
            ))}
          </div>
          <h2 className="mt-8 text-sm font-black uppercase tracking-wide text-zinc-900">Jam Operasional</h2>
          <div className="mt-4 grid gap-2 text-sm text-zinc-500">
            {hours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-wide text-zinc-900">Lokasi Sekolah</h2>
          <div className="mt-5 overflow-hidden rounded-[22px] border border-zinc-100 bg-zinc-50 shadow-sm">
            <div className="relative h-40 bg-[linear-gradient(90deg,#f4f4f5_1px,transparent_1px),linear-gradient(#f4f4f5_1px,transparent_1px)] bg-[size:24px_24px]">
              <div className="absolute left-1/2 top-1/2 size-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-skomda-red/15 p-2">
                <div className="grid size-full place-items-center rounded-full bg-skomda-red text-white shadow-lg">
                  <MapPin className="size-5 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-600 shadow-sm">
                SMK Telkom Sidoarjo
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-sm font-semibold text-zinc-500">
            <span>Angkot: Jalur Terminal Sidoarjo</span>
            <span>Bus: Rute Porong - Surabaya</span>
          </div>
        </section>
      </div>

      <div className="border-t border-zinc-100 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs font-semibold text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 All right reserved. SKOMDA.</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-skomda-red">
              Privacy
            </Link>
            <Link href="/" className="hover:text-skomda-red">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
