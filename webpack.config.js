'use strict';
const path = require('path');
const nodeExternals = require('webpack-node-externals');

let common_config = {
    entry: './src/ls/main.ts',
    output: {
        filename: 'zutil.js',
        path: path.resolve('bin'),
        library: 'zutil',
        libraryTarget: 'umd',
    },
    resolve: {
        modules: [
            path.resolve('./libs'),
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(.*)?$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        target: 'es6',
                    },
                    transpileOnly: true,
                },
                exclude: path.resolve(__dirname, 'node_modules'),
            },
        ],
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: true,
    },
};

const dev_config = {
    ...common_config,
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, './'),
        hot: false,
    },
};

const prod_ts_compile_option = {
    sourceMap: false,
};
common_config.module.rules[0].options.compilerOptions = prod_ts_compile_option;

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return dev_config;
    } else {
        return common_config;
    }
};
