/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "folder-sky": "url('/folder-sky-500.png')",
        "folder-slate": "url('/folder-slate-50.png')",
        "phone-amber": "url('/phone-amber-400.png')",
        "phone-slate": "url('/phone-slate-50.png')"
      }
    },
  },
  plugins: [],
}

