/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(to top right, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
      },
      colors: {
        "_light-gray": "#DFDFDF",
      },
      fontFamily: {
        sans: ["var(--font-dm_sans)"],
      },
    },
  },
  plugins: [],
};
