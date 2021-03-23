module.exports = {
  purge: ['./src/**/*.html', './helpers/shortcodes/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: 'ivypresto-headline, ui-serif, charter, serif',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
