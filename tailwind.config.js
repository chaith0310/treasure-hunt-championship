/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(37, 99, 235, 0.14)",
        glow: "0 20px 60px rgba(124, 58, 237, 0.20)"
      }
    }
  },
  plugins: []
};
