import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mylight: {
          primary: '#9040B8',
          'primary-content': '#e9d9f3',
          secondary: '#1f2937',
          'secondary-content': '#cdd0d3',
          accent: '#111827',
          'accent-content': '#c9cbcf',
          neutral: '#ffffff',
          'neutral-content': '#161616',
          'base-100': '#F5E0FF',
          'base-200': '#d5c3de',
          'base-300': '#b6a6be',
          'base-content': '#151216',
          info: '#111827',
          'info-content': '#c9cbcf',
          success: '#15803d',
          'success-content': '#d4e5d6',
          warning: '#a16207',
          'warning-content': '#eddfd1',
          error: '#dc2626',
          'error-content': '#ffd9d4',
        },
        mydark: {
          primary: '#9752BA',
          'primary-content': '#eadcf3',
          secondary: '#1f2937',
          'secondary-content': '#cdd0d3',
          accent: '#ffffff',
          'accent-content': '#161616',
          neutral: '#ffffff',
          'neutral-content': '#161616',
          'base-100': '#110A14',
          'base-200': '#0d0710',
          'base-300': '#09050c',
          'base-content': '#c9c7ca',
          info: '#111827',
          'info-content': '#c9cbcf',
          success: '#15803d',
          'success-content': '#d4e5d6',
          warning: '#a16207',
          'warning-content': '#eddfd1',
          error: '#dc2626',
          'error-content': '#ffd9d4',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
