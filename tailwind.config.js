const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['bg', 'text-green', 'from', 'to'],
      whitelist: ['green', 'yellow', 'blue', 'orange','pink','purple'],
      whitelistPatterns: ['/^text/','/^bg','/^w','/^space','/^from','/^to']
    },
  },
  darkMode: 'class',
  theme: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
      },
      backdropFilter: {
      'none': 'none',
      'blur': 'blur(10px)',
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
      }
  },
  variants: {
    extend: {},
    backdropFilter: ['responsive']
  },
  plugins: [
    require('tailwindcss-filters')
  ],
  corePlugins: {
    preFlight: true,
  }
}
