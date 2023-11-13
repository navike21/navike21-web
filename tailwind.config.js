/** @type {import('tailwindcss').Config} */

const {
  green,
  transparentGreen,
  gradientGreen,
  grey,
  transparentGrey,
  black,
  transparentBlack,
  white,
  transparentWhite,
  info,
  transparentInfo,
  gradientInfo,
  success,
  transparentSuccess,
  successGradient,
  warning,
  transparentWarning,
  gradientWarning,
  error,
  transparentError,
  gradientError,
  purple,
  transparentPurple,
  gradientPurple
} = require('config/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: green,
      transparent__primary: transparentGreen,
      gradient__primary: gradientGreen,
      secondary: purple,
      transparent__secondary: transparentPurple,
      gradient__secondary: gradientPurple,
      grey,
      transparent__grey: transparentGrey,
      black,
      transparent__black: transparentBlack,
      white,
      transparent__white: transparentWhite,
      info,
      transparent__info: transparentInfo,
      gradient__info: gradientInfo,
      success,
      transparent__success: transparentSuccess,
      gradient__success: successGradient,
      warning,
      transparent__warning: transparentWarning,
      gradient__warning: gradientWarning,
      error,
      transparent__error: transparentError,
      gradient__error: gradientError
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
  plugins: [require('tailwindcss-animated')]
}
