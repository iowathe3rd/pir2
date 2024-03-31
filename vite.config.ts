import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import image from "@rollup/plugin-image";
import path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [mdx(), tsconfigPaths(), { ...image(), enforce: "pre" }, remix()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "app"),
      },
    ],
  },
  build: {
    rollupOptions: {
      plugins: image(),
      external: ["ymaps3"],
    },
  },
});
