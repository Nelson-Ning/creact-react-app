var webpack = require('webpack');
const config = require('./webpack.base.config');
config.devServer = {
    inline: true,
    historyApiFallback: true,
    noInfo: true,
    port: 8080,
    proxy: [{
        context: ['/test'],
        target: 'http://www.baidu.con',
        changeOrigin: true,
        secure: false
    }]
}
config.devtool = 'source-map';
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
)
module.exports = config;