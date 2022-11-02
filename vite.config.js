import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: '3010',
    hmr: {
      overlay: false
    }
  }
})
