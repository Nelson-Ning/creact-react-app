var webpack = require('webpack');
const config = require('./webpack.base.config');
const uglify = require('uglifyjs-webpack-plugin');
// 发布之后html模版引入资源路径
// config.output.publicPath = '';
config.plugins.push(
    new uglify(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
)
module.exports = config;