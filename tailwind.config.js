/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/style.css"
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--color-main)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        link: 'var(--color-link)',
        linkHover: 'var(--color-link-hover)'
      },
    },
  },
  plugins: [],
}

