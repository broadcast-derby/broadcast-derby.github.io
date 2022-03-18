import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['@vitejs/plugin-legacy'],
    },
  },
  resolve: {
    alias: {
      'action': path.resolve(__dirname, 'src/action'),
      'common': path.resolve(__dirname, 'src/common'),
      'molecules': path.resolve(__dirname, 'src/components/molecules'),
      'organisms': path.resolve(__dirname, 'src/components/organisms'),
      'pages': path.resolve(__dirname, 'src/components/pages'),
      'const': path.resolve(__dirname, 'src/const'),
      'interface': path.resolve(__dirname, 'src/interface'),
    }
  },
  server: {
    port: 9870
  }
})
