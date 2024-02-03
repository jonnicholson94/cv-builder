import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBg": "#000",
        "altBg": "#151621",
        "text": "#fff",
        "altText": "#C9C9C9",
        "cta": "#83C0C1",
        "ctaText": "#fff",
        "error": "#FF6464",
        "success": "#BFD8AF",
        "border": "#444",
        "active": "#83C0C1",
        "hover": "#111",
      },
      screens: {
        'xs': "300px",
        'sm': '640px',
        '2sm': '700px',
        'md': '768px',
        'nm': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        "sm": "5px",
        "md": "10px",
        "rnd": "50%"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity : '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: "translateY(0)" }
        }
      },
      animation: {
        "fadeInFast": 'fadeIn 0.5s ease-in',
        "fadeInMedium": 'fadeIn 0.6s ease-in',
        "fadeInSlow": 'fadeIn 0.7s ease-in',
        "fadeUp": "fadeUp 0.5s linear"
      }
    },
  },
  plugins: [],
};
export default config;
