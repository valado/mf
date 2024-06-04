const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
const {
  webpackConfigModifierFactory,
  PROJECT_TYPE,
} = require('../../bundler_support');

const modifier = webpackConfigModifierFactory({
  appName: 'remote',
  type: PROJECT_TYPE.WEB_COMPONENT,
});

module.exports = modifier({
  output: {
    path: join(__dirname, '../../dist/apps/remote-wcomp'),
  },
  devServer: {
    port: 4202,
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      // styles: ['./src/styles.css'],
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
