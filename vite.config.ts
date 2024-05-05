import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://maiiialen.github.io/DnD-Chess/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
