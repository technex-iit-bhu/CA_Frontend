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
    colors: {
      red:"#A81F25",
      background:"191919",
      grey:"#27272780",
      black:"#191919",
      black2:"#00000040"
    },
  },
  plugins: [],
};
export default config;
