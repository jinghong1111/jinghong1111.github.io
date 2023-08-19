import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'

const path = require('path')

export default defineConfig({
  plugins: [
    vue(),

    vuetify({
      autoImport: true,
    }),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',

})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: ''
// })
