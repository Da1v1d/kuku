import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
import { PRIMARY_COLOR } from "./src/shared/configs/theme.config";

export default {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
        "primary-light": "#F47B54",
        "primary-dark": "#C14821",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      dropShadow: {
        primary: "0 5px 25px #F15A29",
        "primary-light": "#F47B54",
        "primary-dark": "#C14821",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#F15A29",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#F15A29",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
