import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: false,
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    colors: {
      ...colors,
      'voxo-red': {
        DEFAULT: '#F92120',
      },
      'voxo-gray': {
        'DEFAULT': '#33444D',
        'dark': '#001520',
        'header': '#1A2D37',
        'light': '#F7F8FB',
        'border': '#C4C4C4',
        'grad-dark': '#ECEEF4',
        'hr': '#4B5563',
        'footer-text': '#A6A7AB',
        'footer-header': '#ECEEF4',
        'medium': '#F4F5F8',
      },
      'google-blue': {
        DEFAULT: '#1782FF',
      },
    },
    fontFamily: {
      eina: ['eina-reg', 'sans-serif'],
      einasemibold: ['eina-semibold', 'sans-serif'],
      einabold: ['eina-bold', 'sans-serif'],
      poppins: ['poppins-reg', 'sans-serif'],
      poppinslight: ['poppins-light', 'sans-serif'],
      poppinssemibold: ['poppins-semibold', 'sans-serif'],
      poppinsbold: ['poppins-bold', 'sans-serif'],
      poppinsextrabold: ['poppins-extrabold', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
})
