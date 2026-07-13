import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKOMDA Digital Platform",
  description: "Website inovasi SMK Telkom Sidoarjo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
