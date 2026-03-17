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
        light: "rgb(var(--color-light) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        highlight: "rgb(var(--color-highlight) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      fontFamily: {
        hero: ['BushcraftDistress', 'sans-serif'],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
