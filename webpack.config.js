var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/App.jsx'
    },
    output: {
        path: './build',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
