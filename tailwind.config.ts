import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sc-blue": "#0F2747",
        "sc-gold": "#D4AF37",
        "sc-red": "#9D2235",
        "sc-green": "#1B5E4B",
        "sc-white": "#FFFFFF",
        "sc-offwhite": "#F8F5F0",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F4E5A1 0%, #D4AF37 45%, #9C7A22 100%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15, 39, 71, 0.35)",
        gold: "0 0 0 1px rgba(212,175,55,0.4), 0 20px 40px -10px rgba(212,175,55,0.25)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
