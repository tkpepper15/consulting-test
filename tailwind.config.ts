import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        heading: "var(--heading)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: "var(--sans)",
        serif: "var(--serif)",
        heading: "var(--heading-font)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        '.bg-primary-5': {
          'background-color': 'var(--primary-5)',
        },
        '.bg-primary-10': {
          'background-color': 'var(--primary-10)',
        },
        '.bg-primary-20': {
          'background-color': 'var(--primary-20)',
        },
        '.bg-accent-5': {
          'background-color': 'var(--accent-5)',
        },
        '.bg-accent-10': {
          'background-color': 'var(--accent-10)',
        },
        '.bg-accent-20': {
          'background-color': 'var(--accent-20)',
        },
      }
      addUtilities(utilities);
    })
  ],
};
export default config;
