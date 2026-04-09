import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      gsap: fileURLToPath(new URL('./node_modules/gsap/index.js', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['gsap'],
  },
})
