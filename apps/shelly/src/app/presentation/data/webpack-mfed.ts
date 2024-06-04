const content = `
const { NxWebpackPlugin } = require('@nx/webpack');
const { NxReactWebpackPlugin } = require('@nx/react');
const { join } = require('path');
const {
  webpackConfigModifierFactory,
  PROJECT_TYPE,
} = require('../../bundler_support');

const modifier = webpackConfigModifierFactory({
  appName: 'remote',
  type: PROJECT_TYPE.MODULE_FEDERATION,
});

module.exports = modifier({
  output: {
    path: join(__dirname, '../../dist/apps/remote-mfed'),
  },
  devServer: {
    port: 4201,
  },
  plugins: [
    new NxWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
      vendorChunk: false,
      runtimeChunk: false,
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
});
    `;

export default content;
