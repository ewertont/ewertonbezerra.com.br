import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#111e28",
          2: "#17242e",
          3: "#1c2b38",
        },
        surface: {
          DEFAULT: "#1c2b38",
          2: "#263745",
        },
        border: {
          DEFAULT: "rgba(255, 126, 98, 0.15)",
          2: "rgba(255, 126, 98, 0.3)",
        },
        brand: {
          coral: "#ff7e62",
          warm: "#ff7e62",
        },
        text: {
          DEFAULT: "#ffffff",
          2: "#94a3b8",
          3: "#64748b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
