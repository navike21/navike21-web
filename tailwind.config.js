/** @type {import('tailwindcss').Config} */

const {
	yellow,
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
	gradientError
} = require('config/colors')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			primary: yellow,
			grey,
			'transparent-grey': transparentGrey,
			black,
			'transparent-black': transparentBlack,
			white,
			'transparent-white': transparentWhite,
			info,
			'transparent-info': transparentInfo,
			'gradient-info': gradientInfo,
			success,
			'transparent-success': transparentSuccess,
			'gradient-success': successGradient,
			warning,
			'transparent-warning': transparentWarning,
			'gradient-warning': gradientWarning,
			error,
			'transparent-error': transparentError,
			'gradient-error': gradientError
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
