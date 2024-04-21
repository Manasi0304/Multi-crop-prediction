import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin } from 'mongoose'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
