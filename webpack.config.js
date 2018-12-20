const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sitePath = path.join(__dirname, 'site');
const buildPath = path.join(sitePath, 'build');
const sourcePath = path.join(sitePath, 'src');

module.exports = {
    entry: path.join(sourcePath, 'scripts/main.ts'),
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: buildPath,
        publicPath: '/build/'
    },
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
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
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: sitePath,
        publicPath: '/build/',
        watchContentBase: true,
        inline: true
    }
};