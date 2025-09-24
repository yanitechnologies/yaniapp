import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
  server:{
    port:5000,
  }
})