/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Light background color
        foreground: "#000000", // Primary text color
        primary: "#7ba541",
         // Added primary color
        secondary: "#d0dc32", // Example secondary color (gray)
        accent: "#fbbf24", // Example accent color (yellow)
        muted: "#f3f4f6", // Muted background color for sections
        border: "#e5e7eb", // Light border color
        text: {
          light: "#6b7280", // Lighter text color for secondary text
          dark: "#374151", // Darker text color for primary text
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding Poppins to the sans font family
      },
    },
  },
  plugins: [],
};
