import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			black: '#000',
			gray: {
				light: '#C4C4C4',
				DEFAULT: '#9796A1',
				dark: '#5B5B5E',
			},
			orange: {
				DEFAULT: '#FE724C',
				dark: '#FF8F6E',
			},
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config;
