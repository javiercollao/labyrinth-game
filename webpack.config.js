'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoaderRules = {
    exclude: /node_modules/,
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        "presets": [
            ["@babel/preset-env", {
            "corejs": 3,
            "useBuiltIns": "entry"
          }]
          ]
        }     
    }
  }

const rawLoaderRules = {
    test: [ /\.vert$/, /\.frag$/ ],
    use: 'raw-loader'
  }

const htmlLoaderRules = {
    test: /\.html$/,
    use: [{
      loader: 'html-loader'
    }]
  }


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
            babelLoaderRules,
            htmlLoaderRules,
            rawLoaderRules
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
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};
