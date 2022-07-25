'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 8000,
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            title: 'Laberinto Game',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};
