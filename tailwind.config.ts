import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/black-purple-bg.jpg')",
      },
    },
    variants: {
      extends: {
        backgroundImage: ["before"],
      },
    },
  },
  plugins: [],
} satisfies Config;
