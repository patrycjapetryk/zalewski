import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-manrope)'],
      },
      screens: {
        xs: '400px',
        '2xl': '1620px',
        '3xl': '1920px',
      },
      fontSize: {
        xxs: '0.68rem',
      },
      colors: {
        red: '#7a273f',
        'shadow-red': '#E52862',
        'red-2': '#730012',
        'dark-red': '#5E0010',
        black: '#1C1D25',
        white: '#ffffff',
        gray: '#F0F0F0',
        'dark-gray': '#221A12',
      },
      borderRadius: {
        xl: '1rem',
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
      },
      content: {
        arrow: 'url("/images/arrow.svg")',
      },
      aspectRatio: {
        long: '1112 / 437',
        reg: '541 / 437',
      },
      animation: {
        'fade-in': 'opacity 0.5s ease-in-out',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
