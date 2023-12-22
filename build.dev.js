const esbuild = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

(async () => {
  let ctx = await esbuild.context({
    entryPoints: ["src/main.tsx"],
    outdir: "www/js",
    bundle: true,
    sourcemap: true,
    inject: ["src/hmr.js"],
    target: ["chrome120", "firefox120"],
    plugins: [solidPlugin()],
  });

  await ctx.watch();
  await ctx.serve({
    servedir: "www",
    port: 8080,
  });
})().catch(() => process.exit(1));
