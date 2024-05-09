import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "floral-white": "#fffdf6",
      black: "#353535",
      "slate-blue": "#5856e4",
      grey: "#b1aeae",
      "green-yellow": "#dffd83",
      tomato: "#fc6d42",

      // Company colours
      "hatch-purple": "#7e54e3",
      "direct-green": "#28a47d",
      "hortplus-blue": "#00AEEF",

      ...colors
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        nohemi: ["var(--font-nohemi)"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
