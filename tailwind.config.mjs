/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F36224",
        secondary:"#2C2C62",
        bodyText: "#212B36",
        headingText: "#15141B",
        gradientStart: "rgba(112, 112, 112, 0.1)", // #707070 with 100% opacity
        gradientEnd: "rgba(255, 102, 37, 1)",    // #ff6625 with 100% opacity
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
