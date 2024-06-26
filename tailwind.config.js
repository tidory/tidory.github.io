const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.html',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      blue: '#5db0d7',
      gray: {
        50: '#f8fafc',
        100: '#a9aaab',
        200: '#53575c',
        300: '#292a2d',
        400: '#1e1f21',
        500: '#18181b'
      }
    },
    extend: {
      spacing: {
        c: '620px',
        s: defaultTheme.spacing['56']
      },
      fontFamily: {
        sans: [
          'SUIT',
          ...defaultTheme.fontFamily.sans
        ],
        mono: [
          'Source Code Pro',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  },
  plugins: []
}
