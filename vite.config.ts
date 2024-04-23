import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from "vite-plugin-dts"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({outDir: 'dist', include: ["src/"],exclude: ["**/__test__/**"]})],
  build:{
    lib:{
      entry: resolve(__dirname,"src/index.ts"),
      name: "libhoock",
      formats: ["es","umd"]
    },
    rollupOptions:{
      external:["react","react-dom "],
      output:{
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
