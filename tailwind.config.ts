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
        fi: {
          purple: "#6C38FF",
          "purple-hover": "#5826E2",
          "purple-dark": "#3B1895",
          "purple-light": "#F2ECFF",
          "purple-soft": "#FAF7FF",
          bg: "#F8F9FD",
          surface: "#FFFFFF",
          text: "#12141A",
          muted: "#6B7280",
          border: "#EBEFFA",
          tag: "#EFEBFF",
          green: "#00BA88",
          "green-light": "#E8FBF4",
          orange: "#FF8C38",
          yellow: "#FBBF24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        fi: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        "fi-card": "0px 2px 12px rgba(108, 56, 255, 0.06)",
        "fi-hover": "0px 8px 30px rgba(108, 56, 255, 0.12)",
        "fi-btn": "0px 6px 20px rgba(108, 56, 255, 0.35)",
        "fi-subtle": "0px 1px 4px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
