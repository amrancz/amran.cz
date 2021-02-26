module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      fontFamily: {
        'heading': ['Rubik', 'sans-serif'],
        'body': ['Work Sans', 'sans-serif'],
      },
      container: {
        center: true,
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
