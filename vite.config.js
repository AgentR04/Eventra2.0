import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: resolve(__dirname, 'frontend'),
  publicDir: resolve(__dirname, 'frontend/public'),
  build: {
    outDir: resolve(__dirname, 'dist')
  }
})
