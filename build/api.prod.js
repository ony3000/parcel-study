const Bundler = require('parcel-bundler');
const baseOptions = require('./options.base');
const entryFiles = [
  './src/index.js'
];
const options = {
  ...baseOptions,
  outFile: 'index.js',
  publicUrl: './dist/',
  sourceMaps: false
};

async function runBundle() {
  const bundler = new Bundler(entryFiles, options);
  const bundle = await bundler.bundle();
}

runBundle();
