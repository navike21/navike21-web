/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        lighter: '#C8FAD6',
        light: '#5BE49B',
        DEFAULT: '#00A76F',
        dark: '#007867',
        darker: '#004B50'
      },
      transparent__primary: {
        8: 'rgba(0, 167, 111, 0.08)',
        12: 'rgba(0, 167, 111, 0.12)',
        16: 'rgba(0, 167, 111, 0.16)',
        24: 'rgba(0, 167, 111, 0.24)',
        32: 'rgba(0, 167, 111, 0.32)',
        48: 'rgba(0, 167, 111, 0.48)',
        56: 'rgba(0, 167, 111, 0.56)'
      },
      gradient__primary: 'linear-gradient(135deg, #5BE49B 0%, #00A76F 100%)',
      secondary: {
        lighter: '#EFD6FF',
        light: '#C684FF',
        DEFAULT: '#8E33FF',
        dark: '#5119B7',
        darker: '#27097A'
      },
      transparent__secondary: {
        8: 'rgba(142, 51, 255, 0.08)',
        12: 'rgba(142, 51, 255, 0.12)',
        16: 'rgba(142, 51, 255, 0.16)',
        24: 'rgba(142, 51, 255, 0.24)',
        32: 'rgba(142, 51, 255, 0.32)',
        48: 'rgba(142, 51, 255, 0.48)',
        56: 'rgba(142, 51, 255, 0.56)'
      },

      gradient__secondary: 'linear-gradient(135deg, #C684FF 0%, #8E33FF 100%)',
      gray: {
        900: '#161C24',
        800: '#212B36',
        700: '#454F5B',
        600: '#637381',
        500: '#919EAB',
        400: '#C4CDD5',
        300: '#DFE3E8',
        200: '#F4F6F8',
        100: '#F9FAFB'
      },
      transparent__gray: {
        8: 'rgba(145, 158, 171, 0.08)',
        12: 'rgba(145, 158, 171, 0.12)',
        16: 'rgba(145, 158, 171, 0.16)',
        24: 'rgba(145, 158, 171, 0.24)',
        32: 'rgba(145, 158, 171, 0.32)',
        48: 'rgba(145, 158, 171, 0.48)',
        56: 'rgba(145, 158, 171, 0.56)'
      },
      black: '#000000',
      transparent__black: {
        8: 'rgba(0, 0, 0, 0.08)',
        12: 'rgba(0, 0, 0, 0.12)',
        16: 'rgba(0, 0, 0, 0.16)',
        24: 'rgba(0, 0, 0, 0.24)',
        32: 'rgba(0, 0, 0, 0.32)',
        48: 'rgba(0, 0, 0, 0.48)',
        56: 'rgba(0, 0, 0, 0.56)'
      },
      white: '#FFFFFF',
      transparent__white: {
        0: 'rgba(255, 255, 255, 0)',
        8: 'rgba(255, 255, 255, 0.08)',
        12: 'rgba(255, 255, 255, 0.12)',
        16: 'rgba(255, 255, 255, 0.16)',
        24: 'rgba(255, 255, 255, 0.24)',
        32: 'rgba(255, 255, 255, 0.32)',
        48: 'rgba(255, 255, 255, 0.48)',
        56: 'rgba(255, 255, 255, 0.56)'
      },
      info: {
        lighter: '#CAFDF5',
        light: '#61F3F3',
        DEFAULT: '#00B8D9',
        dark: '#006C9C',
        darker: '#003768'
      },
      transparent__info: {
        8: 'rgba(0, 184, 217, 0.08)',
        12: 'rgba(0, 184, 217, 0.12)',
        16: 'rgba(0, 184, 217, 0.16)',
        24: 'rgba(0, 184, 217, 0.24)',
        32: 'rgba(0, 184, 217, 0.32)',
        48: 'rgba(0, 184, 217, 0.48)',
        56: 'rgba(0, 184, 217, 0.56)'
      },
      gradient__info: 'linear-gradient(135deg, #61F3F3 0%, #00B8D9 100%)',
      success: {
        lighter: '#D8FBDE',
        light: '#86E8AB',
        DEFAULT: '#36B37E',
        dark: '#1B806A',
        darker: '#0A5554'
      },
      transparent__success: {
        8: 'rgba(54, 179, 126, 0.08)',
        12: 'rgba(54, 179, 126, 0.12)',
        16: 'rgba(54, 179, 126, 0.16)',
        24: 'rgba(54, 179, 126, 0.24)',
        32: 'rgba(54, 179, 126, 0.32)',
        48: 'rgba(54, 179, 126, 0.48)',
        56: 'rgba(54, 179, 126, 0.56)'
      },
      gradient__success: 'linear-gradient(135deg, #86E8AB 0%, #36B37E 100%)',
      warning: {
        lighter: '#FFF5CC',
        light: '#FFD666',
        DEFAULT: '#FFAB00',
        dark: '#B76E00',
        darker: '#7A4100'
      },
      transparent__warning: {
        8: 'rgba(255, 171, 0, 0.08)',
        12: 'rgba(255, 171, 0, 0.12)',
        16: 'rgba(255, 171, 0, 0.16)',
        24: 'rgba(255, 171, 0, 0.24)',
        32: 'rgba(255, 171, 0, 0.32)',
        48: 'rgba(255, 171, 0, 0.48)',
        56: 'rgba(255, 171, 0, 0.56)'
      },
      gradient__warning: 'linear-gradient(135deg, #FFD666 0%, #FFAB00 100%)',
      error: {
        lighter: '#FEE9D1',
        light: '#FDAB76',
        DEFAULT: '#FA541C',
        dark: '#B3200E',
        darker: '#770508'
      },
      transparent__error: {
        8: 'rgba(255, 54, 50, 0.08)',
        12: 'rgba(255, 54, 50, 0.12)',
        16: 'rgba(255, 54, 50, 0.16)',
        24: 'rgba(255, 54, 50, 0.24)',
        32: 'rgba(255, 54, 50, 0.32)',
        48: 'rgba(255, 54, 50, 0.48)',
        56: 'rgba(255, 54, 50, 0.56)'
      },
      gradient__error: 'linear-gradient(135deg, #FF9B83 0%, #FF3632 100%)'
    },
    extend: {},
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1300px',
      xxl: '1440px',
      xxxl: '1920px'
    }
  },
  plugins: []
}
