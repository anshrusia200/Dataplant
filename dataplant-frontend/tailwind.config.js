/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  purge: {
    // content: ["./{components,pages,layout}/**/*.{jsx,tsx}"],
    options: {
      whitelist: [
        "react-toastify", // Add any other classes or styles used by react-toastify
      ],
    },
  },
  plugins: [],
};
