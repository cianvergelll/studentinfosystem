/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-green': '#6b9080',
        'soft-green': '#a4c3b2',
        'light-blue': '#cce3de',
        'pale-blue': '#eaf4f4',
        'off-white': '#f6fff8',
      },
    },
  },
  plugins: [],
};


