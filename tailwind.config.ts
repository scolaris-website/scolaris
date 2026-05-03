import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "#060d1a",
          mid: "#0F172A",
          alt: "#1E3A5F",
        },
        brand: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
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
