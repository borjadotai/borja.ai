import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#0A0A0B",
          secondary: "#121212",
          terciary: "#27272A",
          foreground: "#A1A1A9",
        },
        white: {
          primary: "#FFF",
          secondary: "#FAFAFA",
          terciary: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
