// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        popping: ["var(--font-poppins)", "sans-serif"],
        noto: ["var(--font-noto-sans-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};