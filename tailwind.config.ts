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
        'custom-gradient': 'linear-gradient(180deg, rgba(100, 100, 100, 0.40) 0%, rgba(100, 100, 100, 0.35) 18.35%, rgba(100, 100, 100, 0.29) 35.18%, rgba(100, 100, 100, 0.20) 50.96%, rgba(100, 100, 100, 0.10) 68.32%, rgba(100, 100, 100, 0.05) 83.58%, rgba(100, 100, 100, 0.00) 100%)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'ab': '965px',
    },
    colors: {
      red: '#A81F25',
      background: '#191919',
    },
  },
  plugins: [],
};
export default config;
