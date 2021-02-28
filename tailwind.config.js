const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
        'heading': ['Rubik', 'sans-serif'],
        'body': ['"Work Sans"', 'sans-serif'],
      },
      container: {
        center: true,
      },
      extend: {
        colors: {
          gray: colors.trueGray,
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        fontFamily: {
          sans: ['"Work Sans"']
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
