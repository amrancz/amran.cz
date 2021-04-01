const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg-*-*', 'text-*-*', 'from-*-*', 'to-*-*'],
    },
  },

  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
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
          sans: ['"Inter"']
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preFlight: true,
  }
}
