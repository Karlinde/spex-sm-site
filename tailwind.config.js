/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        sm_blue: "#2e3192",
        sm_yellow: "#fcb040",
      }
    },
  },
  plugins: [],
}

