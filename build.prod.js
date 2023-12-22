const esbuild = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

(async () => {
  await esbuild.build({
    entryPoints: ["app.jsx"],
    bundle: true,
    minify: true,
    outdir: "www/js",
    target: ["chrome120", "firefox120"],
    plugins: [solidPlugin()],
  });
})().catch(() => process.exit(1));
