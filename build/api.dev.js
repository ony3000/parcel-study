const { exec } = require('child_process');
const Bundler = require('parcel-bundler');
const entryFiles = [
  './src/index.js'
];
const options = {
  outFile: 'index.js',
  publicUrl: './dist/',
  watch: true,
  minify: false,
  scopeHoist: false,
  https: false,
  logLevel: 3,
  hmr: false,
  sourceMaps: true
};

async function runBundle() {
  const bundler = new Bundler(entryFiles, options);
  bundler.on('buildEnd', () => {
    exec('echo This message has testing purpose for use `collectstatic` of django.', (err, stdout, stderr) => {
      if (stderr) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  });

  const bundle = await bundler.bundle();
}

runBundle();
