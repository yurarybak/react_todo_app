const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}

const PATHS = {
    src: resolve('src'),
    dist: resolve('dist')
}

const baseWebpack = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: PATHS.dist,
        filename: './js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
};

const devWebpack = {
    devServer: {
        stats: 'errors-only',
        port: 9100,
        open: true,
        host: '192.168.0.123'
    },
};

const prodWebpack = {
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: ExtractTextPlugin.extract({
                    publicPath: "../",
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {
                filename: './css/[name].css',
                disable: false,
                allChunks: true
            })
    ]
};


module.exports = function (env) {
    if (env === 'production') {
        return merge([
            baseWebpack,
            prodWebpack
        ]);
    }
    if (env === 'development') {
        return merge([
            baseWebpack,
            devWebpack
        ])
    }
};