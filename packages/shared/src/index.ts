export const MAJORS = ["SIJA", "TJAT"] as const;
export type Major = (typeof MAJORS)[number];

export const FEATURE_NAMES = [
  "Alumni Journey Map",
  "Talent Hub",
  "AI Konsultasi Jurusan",
  "AI Agent Industri",
  "Virtual School Experience",
] as const;
