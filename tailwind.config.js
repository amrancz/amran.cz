const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'label': ['Poppins', 'sans-serif'],
        'body': ['"Lora"', 'serif'],
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
          serif: ['"Lora"']
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
