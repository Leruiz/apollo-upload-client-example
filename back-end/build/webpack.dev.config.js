const config = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');
const ReloadServerPlugin = require('reload-server-webpack-plugin');

config.output.filename = 'main.js';
config.mode = 'development';

// exculude node_modules
config.target = 'node';
config.externals = [nodeExternals()];

config.watch = true;

config.plugins.push(
  new ReloadServerPlugin({
    script: './dist/main.js',
  }),
);

// source mapping
config.devtool = '#eval-source-map';

module.exports = config;
