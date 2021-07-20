import * as path from 'path';
import * as webpack from 'webpack';
import HookShellPlugin from 'webpack-hook-plugin'

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist/main'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HookShellPlugin({
            onBuildEnd: ['yarn workspace dist dev']
        })
    ],
    target: 'electron-main',
    watch: true
};

export default config;
