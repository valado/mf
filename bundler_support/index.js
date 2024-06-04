const { merge } = require('webpack-merge');

const { PROJECT_TYPE } = require('./consts');
const { generateMFEDConfig } = require('./mfed-utils');
const { generateWCOMPConfig } = require('./wcomp-utils');
const fs = require('fs');
const path = require('path');

const fetchPackageJson = () => {
  try {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../package.json'), {
        encoding: 'utf8',
        flag: 'r',
      })
    );
  } catch (e) {
    handleError(e);
  }
  return {};
};

const handleError = (error) => {
  console.error(error);
  process.exit(1);
};

const webpackConfigModifierFactory = (options) => (config) => {
  let configOverride = {};
  const packageJson = fetchPackageJson();
  if (PROJECT_TYPE.MODULE_FEDERATION === options.type) {
    configOverride = generateMFEDConfig(
      packageJson.name,
      options.appName,
      packageJson.dependencies
    );
  } else if (PROJECT_TYPE.WEB_COMPONENT === options.type) {
    configOverride = generateWCOMPConfig(packageJson.name, options.appName);
  }
  return merge(config, configOverride);
};

module.exports = { webpackConfigModifierFactory, PROJECT_TYPE };
