const esbuild = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

(async () => {
  const ctx = await esbuild.context({
    entryPoints: ["src/tsx/main.tsx", "src/css/main.css"],
    entryNames: "[ext]/[name]",
    outdir: "www",
    bundle: true,
    sourcemap: true,
    logLevel: "info",
    target: ["chrome120", "firefox120"],
    plugins: [solidPlugin()],
    inject: ["src/hmr.js"],
  });

  await ctx.watch();
  await ctx.serve({
    servedir: "www",
    port: 8080,
    fallback: "www/index.html",
  });
})().catch(() => process.exit(1));
