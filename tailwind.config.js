/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.3s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "my-p": "#9ca3af",
        "my-rating": "#ff9533",
        lite: "#F2F3F5",
        "lite-2": "#F5F5F5",
        "gray-3": "#e5e7eb",
        "gray-5": "#6b7280",
        "gray-6": "#4b5563",
        "gray-7": "#374151",
        "gray-8": "#1f2937",
        primary: "#C8815F",
        pink: "#eb3a7b",
        "red-4": "#f87171",
        "red-5": "#ef4444",
        "yellow-5": "#fbb614",
      },
    },
  },
  plugins: [],
};
