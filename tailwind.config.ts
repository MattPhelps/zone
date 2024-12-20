module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the "app" directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include your components directory if separate
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["fantasy"], // DaisyUI theme configuration
  },
};
