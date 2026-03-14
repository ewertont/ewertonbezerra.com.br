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
          DEFAULT: "#080e1a",
          2: "#0d1526",
          3: "#111d35",
        },
        surface: {
          DEFAULT: "#0f1e38",
          2: "#152444",
        },
        border: {
          DEFAULT: "rgba(100,140,220,0.12)",
          2: "rgba(100,140,220,0.22)",
        },
        brand: {
          blue: "#3b82f6",
          blue2: "#60a5fa",
          violet: "#818cf8",
          cyan: "#22d3ee",
        },
        text: {
          DEFAULT: "#e8edf8",
          2: "#8da0c4",
          3: "#506080",
        },
      },
    },
  },
  plugins: [],
};

export default config;
