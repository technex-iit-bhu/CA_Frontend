import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(180deg, rgba(100, 100, 100, 0.40) 0%, rgba(100, 100, 100, 0.35) 18.35%, rgba(100, 100, 100, 0.29) 35.18%, rgba(100, 100, 100, 0.20) 50.96%, rgba(100, 100, 100, 0.10) 68.32%, rgba(100, 100, 100, 0.05) 83.58%, rgba(100, 100, 100, 0.00) 100%)',
        'custom-gradient-2':
          'linear-gradient(180deg, rgba(100, 100, 100, 0.40) 0%, rgba(100, 100, 100, 0.20) 100%)',
      },
      fontFamily: {
        spline: ['Spline Sans', 'sans-serif'],
        istok: ['Istok Web', 'sans-serif'],
        // sedgwik:['Sedgwick Ave', 'cursive']
      },
    },
    screens: {
      gh: '310px',
      ef: '480px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      ab: '965px',
      cd: '1125px',
      // => @media (min-width: 1125px) { ... }
    },
    colors: {
      red: '#A81F25',
      background: '#191919',
      grey: '#272727',
      black: '191919',
      black2: '#00000040',
    },
  },
  plugins: [],
};
export default config;
