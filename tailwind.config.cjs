/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Helvetica", "sans-serif"],
        mono: [
          "Space Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        gray: {
          100: "#fff",
          DEFAULT: "#808080",
          900: "#101010",
        },
      },
      fontSize: {
        heading: "4rem",
      },
    },
  },

  plugins: [],
};
