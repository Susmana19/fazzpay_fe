/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
     'node_modules/preline/dist/*.js',
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#6379F4",
        secondary: "#DADADA",
        white: "#FFFFFF",
        grey: "#FAFCFF",
        green : "#1EC15F",
        sky: "#E5E5E5"
      }
    },
  },
  plugins: [require("daisyui"),  require('flowbite/plugin'), require('preline/plugin')],
}
