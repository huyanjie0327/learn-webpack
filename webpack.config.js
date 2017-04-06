module.exports = {
    entry: './src/',
    output: {
        path: __dirname + '/builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,     
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.html/,
                loader: 'html-loader',
            },
        ],
    }
}
