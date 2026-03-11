/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/styles/style.css"],
  theme: {
    extend: {
      colors: {
        main: "rgb(var(--color-main) / <alpha-value>)",
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        link: "rgb(var(--color-link) / <alpha-value>)",
        linkHover: "rgb(var(--color-link-hover) / <alpha-value>)",
      },
      fontFamily: {
        hero: ["Darumadrop One", "cursive"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
