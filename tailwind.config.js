/** @type {import('tailwindcss').Config} */

const {
	yellow,
	grey,
	greyTransparent,
	black,
	blackTransparent,
	white,
	whiteTransparent
} = require('config/colors')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			primary: yellow,
			grey,
			'grey-transparent': greyTransparent,
			black,
			'black-transparent': blackTransparent,
			white,
			'white-transparent': whiteTransparent
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
