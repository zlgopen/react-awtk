const path = require('path');
const webpack = require('webpack');
const spawn = require('child_process').spawn;
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const config = {
    mode: 'production',
    entry: ['./src/index.js'],
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.out.js',
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { cacheDirectory: true, cacheCompression: false },
          },
        },
      ],
    },
    plugins: [],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    externals: [nodeExternals({})],
  };

  return config;
};
