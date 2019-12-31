import dev from "rollup-plugin-dev";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";

const port = 5000;

export default {
  input: "example/src/index.mjs",
  output: {
    sourcemap: true,
    format: "esm",
    file: `example/public/bundle.mjs`
  },
  plugins: [
    resolve({ browser: true }),
    svelte(),
    dev({
      port,
      dirs: ["example/public"],
      spa: "example/public/index.html",
      basePath: "/base",
      extend(app, modules) {
        app.use(
          modules.router.get("/api/data", async (ctx, next) => {
            const lines = [];
            for (let i = 1; i < 100; i++) {
              lines.push({ time: i, value: i});
            }
            ctx.body = lines;
            next();
          })
        );
      }
    })
  ]
};
