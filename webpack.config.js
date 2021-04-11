const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './build'),
        filename: 'bundle-[contenthash].js',
        publicPath: ''
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}