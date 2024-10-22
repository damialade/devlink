/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-dark": "#333333",
        "default-purple": "#633cff",
        "active-purple": "#beadff",
        "disabled-purple": "#efebff",
        "default-gray": "#737373",
        "disabled-gray": "#d9d9d9",
        "disabled-white": "#fafafa",
        "default-white": "#ffffff",
        "default-red": "#ff3939",
      },
      screens: {
        "phone-mini": "200px",
        "phone-xs": "320px",
        "phone-sm": "375px",
        "phone-md": "400px",
        "phone-lg": "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "desktop-med": "1350px",
        "desktop-wide": "1440px",
        "desktop-2xl": "1536px",
        "desktop-des": "1728px",
      },
    },
  },
  plugins: [],
};
