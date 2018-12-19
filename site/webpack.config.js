const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outPath = path.resolve(__dirname, 'build');

module.exports = {
    entry: './src/scripts/main.ts',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: outPath,
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('node-sass'),
                        file: './src/style.scss',
                        sourceMap: true
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: outPath,
        publicPath: '/'
    }
};