import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/todo-list-react/',
  plugins: [react()],
  server: {
    open: true,
  },
})
