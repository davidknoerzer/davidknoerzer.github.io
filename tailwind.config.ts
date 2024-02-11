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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",

          "--rounded-box": "1rem",
          "--rounded-btn": "1rem",
          "--rounded-badge": "1rem",

          "--animation-btn": ".25s",
          "--animation-input": ".25s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],

          "base-100": "#000000",
          "base-200": "#212121",
          "base-300": "#444444",
          "base-content": "#ffffff",

          "--rounded-box": "1rem",
          "--rounded-btn": "1rem",
          "--rounded-badge": "1rem",

          "--animation-btn": ".25s",
          "--animation-input": ".25s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
    darkTheme: "dark",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
