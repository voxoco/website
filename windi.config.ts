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
        dark: '#E01E1D',
      },
      'voxo-gray': {
        'DEFAULT': '#000',
        'dark': '#000',
        'header': '#000',
        'light': '#fafafa',
        'border': '#C4C4C4',
        'grad-dark': '#ECEEF4',
        'hr': '#eaeaea',
        'footer-text': '#656565',
        'footer-header': '#000',
        'medium': '#F4F5F8',
      },
      'google-blue': {
        DEFAULT: '#1782FF',
      },
      'voxo-purple': {
        DEFAULT: '#8459FF',
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
