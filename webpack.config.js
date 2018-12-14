const path = require('path');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/
        }]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};
