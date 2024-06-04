const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');

const { ModuleFederationPlugin } = require('webpack').container;

const {
  SHARED_LIBS,
  SHELL_SHARED_SCOPE,
  getSharedLibsConfig,
  convert2ModuleName,
} = require('../../bundler_support/shell');
const { name, dependencies } = require('../../package.json');

// https://webpack.js.org/concepts/module-federation/
// https://github.com/module-federation
// https://github.com/module-federation/module-federation-examples

const commonSharingOptions = {
  singleton: true,
  strictVersion: true,
  eager: true, // important that the shell loads the dependencies immediately
};

const shared = getSharedLibsConfig(
  SHARED_LIBS,
  commonSharingOptions,
  dependencies
);

console.log('##### Shared dependencies:');
console.log(shared);
console.log('#####');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/shelly'),
    uniqueName: convert2ModuleName(name),
  },
  devServer: {
    port: 4200,
    historyApiFallback: true,
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: [
        './src/favicon.ico',
        './src/mockServiceWorker.js',
        './src/assets',
      ],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    new ModuleFederationPlugin({
      name,
      shareScope: SHELL_SHARED_SCOPE,
      shared,
    }),
  ],
};
