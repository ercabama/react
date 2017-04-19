const path = require('path'),
    webpack = require('webpack'),
    CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src'
        ],
        signIn: [
            'webpack-hot-middleware/client',
            './src/signIn'
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/assets',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader?cacheDirectory=.babel-cache']
            }, {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                exclude: [
                    /\.html$/,
                    /\.jsx?$/,
                    /\.s?css$/,
                    /\.json$/,
                ],
                use: 'url-loader?name=[name].[ext]&limit=10000'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new LodashModuleReplacementPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
            disable: false
        })
    ]
};
