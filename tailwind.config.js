/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			'yellow': {
				'100': '#FFEB92',
				'200': '#FFE46D',
				'300': '#FFDE49',
				'400': '#FFD724',
				DEFAULT: '#FFD000',
				'600': '#FFD000',
				'700': '#FFC300',
				'800': '#FFB700',
				'900': '#FA0',
			},
			'black': {
				'100': '#7C8EB7',
				'200': '#556A9A',
				'300': '#3D4C6E',
				'400': '#252E43',
				DEFAULT: '#0C0F16',
				'600': '#0C0F15',
				'700': '#0B0E14',
			},
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
