module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "lime"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
