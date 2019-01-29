const rewireLess = require('react-app-rewire-less')
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#ea6f5a"},
    javascriptEnabled: true,
  })(config, env);

  return config;
};