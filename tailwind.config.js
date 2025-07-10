// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
     extend: {
    animation: {
      blob: "blob 8s infinite",
    },
    colors: {
      primary: "#6b8e23", // Olive Green
      secondary: "#4f6f52", // Dark Olive
      accent: "#d0c6b0", // Light Beige
      background: "#f5f5f5", // Light Background
      textPrimary: "#333333", // Dark Text
      textSecondary: "#555555", // Medium Text
    },
    keyframes: {
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -20px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
    },
  },

  },
  plugins: [],
};
