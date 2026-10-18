import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a1628", mid: "#132040", light: "#1e3a6e" },
        gold: { DEFAULT: "#c9a84c", light: "#f0d080", dark: "#a07830" },
        cream: "#faf8f3",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-12px, -28px, 0)" },
        },
        "float-slow-alt": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(16px, 22px, 0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        "float-slow-alt": "float-slow-alt 11s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
