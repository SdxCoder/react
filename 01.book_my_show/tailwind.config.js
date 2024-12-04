/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'c-midnight-zone': '#032541',
        'c-cyan': '#07B4E4',
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans- serif"]
      },
      backgroundImage: {
        'logo': "url('/src/shared/assets/tmdb.png')",
      }
    },
  },
  plugins: [],
}

