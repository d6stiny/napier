/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				prose: '80ch'
			},

			fontFamily: {
				sans: 'Inter'
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-dotted-background')
	],
}
