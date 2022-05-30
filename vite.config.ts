import { defineConfig } from "vite";
const path = require('path')

export default defineConfig({
  // build: {  
  //   lib: {
  //     entry: path.resolve(__dirname, 'utils/web-repoter/wpk-repoter.js'),
  //     name: 'Repoter',
  //     fileName: (format) => `wpk-repoter.${format}.js`
  //   },
  // },
  optimizeDeps: {
    entries:['utils/web-repoter/wpk-repoter.js']
  }
})