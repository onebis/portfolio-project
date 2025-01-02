import { nextui } from '@nextui-org/react'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        potta_one: ['var(--font-Potta_One)'],
        inter: ['var(--font-Inter)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#DCDCDC',
            foreground: '#1A202C',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
        },
        dark: {
          colors: {
            background: '#202023',
            foreground: '#EEEEEE',
            primary: {
              foreground: '#EEEEEE',
              DEFAULT: '#006FEE',
            },
          },
        },
      },
    }),
  ],
};
export default config;
