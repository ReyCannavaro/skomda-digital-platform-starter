import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKOMDA Digital Platform",
  description: "Website inovasi SMK Telkom Sidoarjo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        <div className="pt-20 sm:pt-24">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
