const esbuild = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

(async () => {
  await esbuild.build({
    entryPoints: ["src/tsx/main.tsx", "src/css/main.css"],
    entryNames: "[ext]/[name]",
    outdir: "www",
    bundle: true,
    minify: true,
    logLevel: "error",
    target: ["chrome120", "firefox120"],
    plugins: [solidPlugin()],
  });
})().catch(() => process.exit(1));
