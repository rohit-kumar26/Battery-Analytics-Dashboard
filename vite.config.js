import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://zenfinity-intern-api-104290304048.europe-west1.run.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  }
})
