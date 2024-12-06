/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'c-midnight-zone': '#032541',
        'c-cyan': '#07B4E4',
        'c-light-green': 'rgba(30, 213, 169, 1)',
        'c-light-blue': 'rgba(1, 180, 228, 1)',
        'c-gray': 'rgba(0,0,0,0.6)'
      },
      fontFamily: {
        sans: ["sans-serif"]
      },
      backgroundImage: {
        'logo': "url('/src/shared/assets/tmdb.png')",
      },
      spacing: {
        max_width: '80rem'
      }
    },
  },
  plugins: [],
}

