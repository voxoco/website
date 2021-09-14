import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors';

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
        DEFAULT: '#33444D',
        dark: '#001520',
      },
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
