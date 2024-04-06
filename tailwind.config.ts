import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
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
      tomato: "#fc6d42"
    },

    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite"
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        nohemi: ["var(--font-nohemi)"]
      }
    }
  }
};

export default config;
