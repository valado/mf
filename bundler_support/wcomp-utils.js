const path = require('path');
const { PROJECT_TYPE } = require('./consts');

const generateWCOMPConfig = (packageName, appName) => ({
  entry: path.resolve(
    process.cwd(),
    `apps/${appName}-${PROJECT_TYPE.WEB_COMPONENT}/src/main.tsx`
  ),
  output: {
    path: path.resolve(
      process.cwd(),
      `dist/apps/${appName}-${PROJECT_TYPE.WEB_COMPONENT}`
    ),
    filename: `${PROJECT_TYPE.WEB_COMPONENT}.js`,
    uniqueName: `${packageName}-${appName}`,
    devtoolNamespace: `${packageName}-${appName}`,
    chunkLoadingGlobal: `${packageName}-${appName}`,
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
});

module.exports = { generateWCOMPConfig };
