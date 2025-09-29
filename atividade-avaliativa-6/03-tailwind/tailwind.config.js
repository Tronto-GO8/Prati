/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ou "media", se quiser automático
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fundo: {
          light: "#ffffff",
          dark: "#111111",
        },
        texto: {
          light: "#111111",
          dark: "#f9f9f9",
        },
        principal: {
          light: "#e5e7eb",
          dark: "#3b82f6",
        },
        itens: {
          light: "#e5e7eb",
          dark: "#333333",
        },     
      },
    },
  },
  plugins: [],
};
