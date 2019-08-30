var path = require('path');
var nodeExternals = require('webpack-node-externals');

var typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
};

module.exports = [
    {
        entry: './src/index.ts',
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        resolve: {
            extensions: ['.ts'],
        },
        module: {
            rules: [
                { test: /\.css$/, use: 'css-loader' },
                { test: /\.ts$/, use: 'ts-loader' }
            ]
        },
        output: {
            filename: './main.js',
            path: path.resolve(__dirname)
        }
    },
];