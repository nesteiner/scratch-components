import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],

  build: {
    lib: {
      entry: "src/main.ts",
      name: "scratch-components"
    },

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },

    outDir: "lib"
  }
})
