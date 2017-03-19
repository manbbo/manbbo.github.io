const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        "./index.js",
    ],
    output: {
        filename: 'bundle.js',
        pathinfo: true,
        publicPath: '/static/',
    },
    resolve: {
        modules: [
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-0'],
                },
            },
        ],
    },
        devServer: {
          hot: true,
          inline: true,
          noInfo: false,
          host: '0.0.0.0',
          port: 3000,
          historyApiFallback: true,
          contentBase: "./",
        },
};