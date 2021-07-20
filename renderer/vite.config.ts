import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build:{
    outDir:"../dist/renderer"
  },
  base:"./",
  server:{
    port:3030
  }
})
