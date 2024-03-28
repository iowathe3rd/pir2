import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import image from "@rollup/plugin-image";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [{ ...image(), enforce: "pre" }, mdx(), tsconfigPaths(), remix()],
});
