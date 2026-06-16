import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ember: "#ff7a18",
        cyanLore: "#3ff7ff",
        violetLore: "#9d5cff",
        void: "#03040a",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 48px rgba(63, 247, 255, 0.32)",
        ember: "0 0 52px rgba(255, 122, 24, 0.28)",
      },
      keyframes: {
        fog: {
          "0%, 100%": { transform: "translate3d(-4%, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fog: "fog 18s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
