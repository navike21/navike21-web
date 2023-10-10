/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
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
