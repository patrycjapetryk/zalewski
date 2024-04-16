import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        red: '#830016',
        'red-2': '#730012',
        'dark-red': '#5E0010',
        black: '#240004',
      },
      backgroundImage: {
        texture: "url('/images/background-1.jpg')",
      },
      backgroundSize: {
        '100%': '100%',
        '150%': '150%',
      },
      backgroundPosition: {
        center: 'center -28%',
      },
      borderRadius: {
        xl: '1rem',
      },
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      content: {
        arrow: 'url("/icons/link.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
