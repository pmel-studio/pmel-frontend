import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        line: "#dfe5ef",
        mist: "#fbfcff",
        planet: "#2f343d",
        orbit: "#3b424d",
      },
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "Pretendard",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(25, 40, 70, 0.11)",
      },
    },
  },
  plugins: [],
};

export default config;
