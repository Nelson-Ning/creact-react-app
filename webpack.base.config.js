var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '',
        filename: '[hash:8].bundle.js',
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                } //将react编译成js文件
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    remove: false,
                                    broswer: 'last 5 versions'
                                })
                            ]
                        }
                    }]
                })
            },
            //打包css文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                indent: 'postcss',
                                plugins: [
                                    require('autoprefixer')({
                                        remove: false,
                                        broswer: 'last 5 versions'
                                    })
                                ]
                            },
                        },
                        "less-loader"
                    ]
                })
            },
            //编译sass文件
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=8192&name=img/[hash:8].[name].[ext]']
            }
            //对图片进行打包
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.[contenthash:6].css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            //favicon: path.join(__dirname, 'public/favicon.ico'),
            filename: 'index.html'
        })
    ]
};