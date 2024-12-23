module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the "app" directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include your components directory if separate
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Paragraph font
        heading: ['Poppins', 'sans-serif'],     // Heading font
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cmyk"], // DaisyUI theme configuration
  },
};

// #F2F2F2