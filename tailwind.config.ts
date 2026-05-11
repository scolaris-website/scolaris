import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "#0a2530",   // teal foncé Scolaris (au lieu de presque noir)
          mid:  "#133a48",   // teal medium
          alt:  "#1a5565",   // teal Scolaris (couleur principale du logo)
        },
        brand: {
          DEFAULT: "#1a5565",   // teal Scolaris principal
          light:   "#2a7588",   // teal Scolaris clair
          accent:  "#c9a227",   // doré Scolaris (serpent du logo)
        },
        accent: {
          green: "#10B981",
          amber: "#F59E0B",
          cyan:  "#06B6D4",
          violet:"#8B5CF6",
          orange:"#F97316",
          red:   "#EF4444",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          mute:    "#94A3B8",
          dim:     "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
