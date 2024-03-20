import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sl-')
        }
      }
    }),
    dts()
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'node_modules/primevue/resources/themes/saga-blue/theme.css')
      ],
      name: 'Vuelace',
      fileName: 'vuelace'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name.endsWith('.css') ? 'styles/[name][extname]' : 'assets/[name][extname]',
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
