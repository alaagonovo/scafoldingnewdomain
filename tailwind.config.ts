import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnbg: "var(--background-btn)",
        linksColor: "var(--text-links-color)",
        lightBlue: "var(--light-blue-color)",
        reviewTitle: "var( --review-title-color)",
        reviewactive: "var(--review-active-color)",
        reviewsemilight: "var(--review-semilight-color)",
        reviewsemidark: "var(--review-semidark-color)",
        reviewdark: "var(--review-dark-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
