/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#262626',
        'grey2': '#222',
        'primary': '#FF8800',
        'secondary': '#4B4B4B',
        'red': '#E5252A',
        'blue': '#00C2FF',
        'blueDark': '#0085FF',
        'blue-10': '#00C2FF1A',
      },
      flexGrow: {
        1: '1',
        2: '2',
        3: '3'
      }
    },
    fontSize: {
      'h6': ['18px', {
        lineHeight: 'normal',
        letterSpacing: '0',
        fontWeight: '400',
      }],
    },
    fontFamily: {
      'inter': ['Inter'],
      'poppins': ['Poppins'],
      'meriweather': ['Meriweather'],
    },
  },
  plugins: [],
}

