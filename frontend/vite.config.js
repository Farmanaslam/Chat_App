import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://chat-app-b14o.onrender.com', // ✅ point to Render
        changeOrigin: true,  // ✅ required for cross-origin proxy
        secure: true         // ✅ target is HTTPS
      }
    }
  }
})