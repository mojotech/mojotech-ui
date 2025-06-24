import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), dts({ include: ["lib", "src"] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "bundle",
      fileName: format => `bundle.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "React",
          "react/jsx-dev-runtime": "React",
        },
      },
    },
  },
});
