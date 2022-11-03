import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteJumpCode from 'vite-jump-code'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [vue(),viteJumpCode()],
  server: {
    host: '0.0.0.0',
    port: '3010',
    hmr: {
      overlay: false
    }
  }
})
