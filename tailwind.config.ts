import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        gradient1: "#c740fe",
        gradient2: "#8735fe",
        gradient3: "#4a2bff",
        "primary-contrast": "rgba(var(--primary-contrast))",
        offset: "rgba(var(--offset))",
        tertiary: "rgba(var(--tertiary))",
        spotGrad: "gradient-to-b from-[#18272a] via-[#1c212b] to-[#201c2b]",
        // "quaternary": "rgba(var(--quaternary))",
        // "quinary": "rgba(var(--quinary))",
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
    require("tailwind-scrollbar-hide"),
    // require("prettier-plugin-tailwind"),
  ],
  darkMode: "class",
};
export default config;
