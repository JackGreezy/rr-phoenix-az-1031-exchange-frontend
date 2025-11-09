import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        "desert-xl": "0 32px 120px rgba(24, 24, 24, 0.08)",
        "desert-lg": "0 20px 60px rgba(24, 24, 24, 0.08)",
      },
    },
  },
  plugins: [forms],
};

export default config;

