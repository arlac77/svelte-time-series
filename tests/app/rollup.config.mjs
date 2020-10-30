import virtual from "@rollup/plugin-virtual";

import resolve from "@rollup/plugin-node-resolve";
import dev from "rollup-plugin-dev";
import svelte from "rollup-plugin-svelte";

const port = 5000;

const basedir = "tests/app";

export default {
  input: `${basedir}/src/index.mjs`,
  output: {
    sourcemap: true,
    format: "esm",
    file: `${basedir}/public/bundle.main.mjs`
  },
  plugins: [dev({
    port,
    dirs: [`${basedir}/public`],
    spa: `${basedir}/public/index.html`,
    basePath: `/components/svelte-time-series/${basedir}`
  }), svelte(), resolve({
    browser: true,
    dedupe: importee =>
      importee === "svelte" || importee.startsWith("svelte/")
  }), virtual({
    "node-fetch": "export default fetch",
    stream: "export class Readable {}",
    buffer: "export class Buffer {}"
  })]
};
