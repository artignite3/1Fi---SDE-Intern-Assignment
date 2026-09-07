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
          purple: "#5C24EB", // Vibrant 1Fi signature purple
          "purple-hover": "#4E1BD6",
          "purple-dark": "#2B0B80",
          "purple-light": "#F2EEFD", // Soft violet pill background
          "purple-soft": "#FAF8FF",
          bg: "#F8F9FA", // Clean off-white background
          surface: "#FFFFFF",
          text: "#181A20", // Deep dark charcoal
          muted: "#80869A", // Soft secondary text
          border: "#F1F3F9", // Crisp 1px card border
          tag: "#F2EEFD",
          green: "#00BA88", // 1Fi verified green
          "green-light": "#E8FBF4",
          orange: "#FF8C38",
          yellow: "#FBBF24",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        fi: "0px 4px 20px rgba(0, 0, 0, 0.04)",
        "fi-card": "0px 2px 8px rgba(0, 0, 0, 0.03)",
        "fi-hover": "0px 8px 24px rgba(92, 36, 235, 0.12)",
        "fi-btn": "0px 4px 14px rgba(92, 36, 235, 0.35)",
        "fi-subtle": "0px 1px 3px rgba(0, 0, 0, 0.03)",
      },
      borderRadius: {
        "xl": "12px",
        "2xl": "16px",
        "3xl": "22px",
        "4xl": "28px",
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
