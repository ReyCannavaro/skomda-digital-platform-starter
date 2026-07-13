import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        skomda: {
          red: "#e9272e",
          dark: "#111111",
        },
      },
    },
  },
  plugins: [],
};

export default config;
