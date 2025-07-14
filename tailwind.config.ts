import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				// OpsCanvas Design System Colors
				background: "#141826",
				surface: "#272f48",
				card: "#3c3f4e",
				border: "#424764",
				text: "#d2c3c8",
				secondary: "#7e9cb6",
				accent: "#5056c9",
				success: "#10B981",
				error: "#EF4444",
				gray: "#646c7c",
				// Keep existing system colors for compatibility
				primary: {
					DEFAULT: "#5056c9",
					foreground: "#d2c3c8"
				},
				destructive: {
					DEFAULT: "#EF4444",
					foreground: "#d2c3c8"
				},
				muted: {
					DEFAULT: "#272f48",
					foreground: "#7e9cb6"
				},
				popover: {
					DEFAULT: "#3c3f4e",
					foreground: "#d2c3c8"
				},
				foreground: "#d2c3c8",
				input: "#424764",
				ring: "#5056c9",
				sidebar: {
					DEFAULT: "#272f48",
					foreground: "#d2c3c8",
					primary: "#5056c9",
					'primary-foreground': "#d2c3c8",
					accent: "#3c3f4e",
					'accent-foreground': "#d2c3c8",
					border: "#424764",
					ring: "#5056c9"
				},
				warning: {
					DEFAULT: "#F59E0B",
					foreground: "#d2c3c8"
				},
				'chart-line': "#5056c9",
				'metric-bg': "#272f48",
				'component-bg': "#272f48"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
