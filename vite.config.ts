import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Use '/' for username.github.io, or '/repo-name/' for project pages
  server: {
    port: 3000,
    open: true
  }
})
