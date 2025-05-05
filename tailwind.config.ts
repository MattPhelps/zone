// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "#0E0F12", // Tailwind color directly usable
        lightgray: "#B7B7B8",  // Example of your added color
        lightBackground: "#212121", // optional if you use it
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        chiddyBang: {   // <- **Give your custom theme a name here**
          "primary": "#1F58D0",
          "secondary": "#2ecc71",
          "accent": "#9b59b6",
          "neutral": "#1F2937",
          "base-100": "#ffffff",
          "info": "#1abc9c",
          "success": "#00AA6E",
          "warning": "#f39c12",
          "error": "#e74c3c",
          "background": "#0E0F12",
          "pippyGrey": "#B7B7B8",
          "lightBackground": "#212121",
        },
      },
      "fantasy", // fallback theme
    ],
  },
};
