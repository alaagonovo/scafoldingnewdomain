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
        footerbg: "var(--footer-bg-color)",
        time: "var(--footer-times-color)",
        placeholderColor: "var(--placeholder-text-color)",
        borderColor: "var(--border-inputs-color)",
        labelColor: "var(--label-form-color)",
      },
      boxShadow: {
        procardshade:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.08), 0px 12px 16px -4px rgba(16, 24, 40, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
