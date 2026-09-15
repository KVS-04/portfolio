/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#09090b", // base black
        cardBg: "rgba(24, 24, 27, 0.4)", // transparent zinc-900 for glassmorphism
        accent: "#a78bfa", // violet-400
        accentLight: "#c4b5fd", // violet-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
