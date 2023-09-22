import { dts } from "rollup-plugin-dts";

// Configuration for TypeScript declaration file
const dtsConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/theme-colors.d.ts',
    format: 'es'  // This format works well with .d.ts files
  },
  plugins: [
    dts(),
  ]
};


export default [dtsConfig]