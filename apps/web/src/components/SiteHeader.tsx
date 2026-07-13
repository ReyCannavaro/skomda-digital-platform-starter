import Link from "next/link";
import { ChevronDown, Menu, Search, UserRound } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/#tentang", hasDropdown: true },
  { label: "Program", href: "/program/profil-jurusan", hasDropdown: true },
  { label: "Informasi", href: "/#informasi", hasDropdown: true },
  { label: "Virtual Tour", href: "/school-tour", hasDropdown: true },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-zinc-100 bg-white/95 px-3 shadow-[0_14px_40px_rgba(17,24,39,0.10)] backdrop-blur md:h-16 md:px-5">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="SMK Telkom Sidoarjo">
          <span className="grid size-8 place-items-center rounded-lg bg-skomda-red text-[10px] font-black leading-none text-white shadow-sm">
            TS
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[13px] font-black text-zinc-900">SMK Telkom</span>
            <span className="block text-[10px] font-semibold text-zinc-500">Sidoarjo</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-zinc-700 transition hover:bg-red-50 hover:text-skomda-red"
            >
              {item.label}
              {item.hasDropdown ? <ChevronDown className="size-3.5" strokeWidth={2.4} /> : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hidden size-9 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-red-200 hover:bg-red-50 hover:text-skomda-red md:grid"
            type="button"
            aria-label="Cari"
          >
            <Search className="size-4" />
          </button>
          <div className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 text-xs font-bold text-zinc-600 md:flex">
            <span className="rounded-full bg-white px-2 py-1 shadow-sm">ID</span>
            <span className="px-2 py-1 text-zinc-400">EN</span>
          </div>
          <Link
            href="/#daftar"
            className="hidden items-center gap-2 rounded-full bg-skomda-red px-4 py-2.5 text-[12px] font-black text-white shadow-[0_10px_24px_rgba(233,39,46,0.28)] transition hover:-translate-y-0.5 hover:bg-red-700 sm:inline-flex"
          >
            Untuk Informasi
            <UserRound className="size-4" />
          </Link>
          <button
            className="grid size-10 place-items-center rounded-full bg-skomda-red text-white shadow-sm lg:hidden"
            type="button"
            aria-label="Buka menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
