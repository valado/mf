const content = `
const { ModuleFederationPlugin } = require('webpack').container;
const { convert2ModuleName } = require('./utils');

const { PROJECT_TYPE } = require('./consts');
const SHELL_SHARED_SCOPE = 'portal_mfed_scope';
const SHARED_LIBS = ['react', 'react-dom'];
const REMOTE_SHARING_OPTIONS = {
  singleton: true,
  strictVersion: true,
  eager: false,
  shareScope: SHELL_SHARED_SCOPE,
};

const generateMFEDConfig = (packageName, appName, deps) => {
  const name = convert2ModuleName(\`\${packageName}-\${appName}\`); // is the remoteScope
  const shared = getSharedLibsConfig(SHARED_LIBS, REMOTE_SHARING_OPTIONS, deps);
  const exposedEntry = { 'main-entry': \`./src/app/App\` };
  console.log('##### Shared dependencies:');
  console.log(shared);
  console.log('#####');

  return {
    output: {
      uniqueName: name,
      publicPath: 'auto',
      scriptType: 'text/javascript',
    },
    plugins: [
      new ModuleFederationPlugin({
        name,
        filename: \`\${PROJECT_TYPE.MODULE_FEDERATION}.js\`,
        shareScope: SHELL_SHARED_SCOPE,
        exposes: exposedEntry,
        shared,
      }),
    ],
  };
};

function getSharedLibsConfig(libs, commonSharingOptions, deps) {
  return libs.reduce(
    (accumulated, current) => ({
      ...accumulated,
      [current]: getSharingHints(current, commonSharingOptions, deps),
    }),
    {}
  );
}

function getSharingHints(libName, commonSharingOptions, deps) {
  return Object.assign({}, commonSharingOptions, {
    requiredVersion: deps[libName],
    shareKey: libName,
  });
}

module.exports = {
  SHARED_LIBS,
  SHELL_SHARED_SCOPE,
  generateMFEDConfig,
  getSharedLibsConfig,
};

    `;

export default content;
