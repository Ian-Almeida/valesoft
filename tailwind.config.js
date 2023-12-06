/** @type {import('tailwindcss').Config} */

const colors = {
  // ...defaultColors,
  ...{
    primary: "#98C741",
    secondary: "#4F9072",
  }
}

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: colors,
      screens: {
        ...{
          'msm': "320px",
          'mmd': "375px",
          'mlg': "420px",
        }
      }
    },
  },
  plugins: [],
}

