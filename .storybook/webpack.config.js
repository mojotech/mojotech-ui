const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
