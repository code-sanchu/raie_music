// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	future: { hoverOnlyWhenSupported: true },

	theme: {
		extend: {
			colors: {
				'my-black': {
					DEFAULT: '#161616',
					50: '#CBCBCB',
					100: '#C1C1C1',
					200: '#ACACAC',
					300: '#989898',
					400: '#848484',
					500: '#6F6F6F',
					600: '#5B5B5B',
					700: '#464646',
					800: '#323232',
					900: '#161616',
					950: '#080808'
				},
				'bricks-bg-gray': '#f4f4f4'
			},

			fontFamily: {
				sans: ['Helvetica', 'sans-serif']
			},

			screens: {
				xxs: '360px',
				xs: '410px',
				'xs/sm': '525px',
				sm: '640px',
				'sm/md': '704px',
				md: '768px',
				'md/lg': '896px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1800px'
			},

			spacing: {
				xxxs: '.1rem',
				xxs: '.25rem',
				xs: '.5rem',
				sm: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'1.5xl': '4.5rem',
				'2xl': '6rem',
				'2.5xl': '7.5rem',
				'3xl': '9rem'
			},

			fontSize: {
				'1.5lg': '1.1875rem',
				'1.5xl': '1.375rem'
			}
		}
	},

	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => {
						return {
							'animation-delay': value
						};
					}
				},
				{
					values: theme('transitionDelay')
				}
			);
		})
	]
};
