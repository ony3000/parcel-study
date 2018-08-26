const Bundler = require('parcel-bundler');
const entryFiles = [
  './src/index.js'
];
const options = {
  outFile: 'index.js',
  publicUrl: './dist/',
  watch: false,
  minify: true,
  scopeHoist: false,
  https: false,
  logLevel: 3,
  hmr: false,
  sourceMaps: false
};

async function runBundle() {
  const bundler = new Bundler(entryFiles, options);
  const bundle = await bundler.bundle();
}

runBundle();
