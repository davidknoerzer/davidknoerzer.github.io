import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": `linear-gradient(to bottom-left, #6ee7b7, #3b82f6)`
      },
    },
  },
  daisyui: {
    themes: ["light",],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
