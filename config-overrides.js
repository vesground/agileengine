const { override, useBabelRc } = require('customize-cra');
const { DefinePlugin } = require("webpack");
const dotenv = require('dotenv');

const findWebpackPlugin = (plugins, pluginName) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

const overrideProcessEnv = (value, config) => {
  const plugin = findWebpackPlugin(config.plugins, 'DefinePlugin') || new DefinePlugin({});
  const processEnv = plugin.definitions['process.env'] || {};

  plugin.definitions['process.env'] = {
    ...processEnv,
    ...value,
  };

  return config;
};

module.exports = override(useBabelRc(), config => {

  // const env = dotenv.config().parsed;
  // // reduce it to a nice object, the same as before
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[next] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});
  // overrideProcessEnv(envKeys, config)

  return config;
});
