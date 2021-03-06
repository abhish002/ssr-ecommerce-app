const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        client: './src/client.js',
        bundle: './src/bundle.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.svg$/,
                use: [
                    '@svgr/webpack',
                    'svg-url-loader'
                ]
            },
        ]
    }
}