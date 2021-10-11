module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: '#171819',
        primary: '#202324',
        secondary: {
          0: '#239BFB',
          1: '#0363C3',
          2: '#0051A4'
        }
      },
      fontFamily: {
        sans: ['Gilroy']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
