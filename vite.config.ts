import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from "vite-plugin-dts"
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },

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
