// const MyPlugin = require('./plugin/plugin1')
// const ErudaWebapckPlugin = require('eruda-webpack-plugin')
const path = require('path')
module.exports = {
    entry: path.resolve('./',"src/main.js"),
    output: {
        path: path.resolve('./',"public"),
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('./',"public"),
        historyApiFallback: true,
        inline: true,
        host:'localhost'//'0.0.0.0' //
    },
    module: {
        rules: [
            {
                test: /(.js)$/,
                use: [
                    {
                        loader: path.resolve('./','loader/index.js')
                    }
                ],
                exclude: [
                    /node_modules/, 
                    path.resolve('./',"src/tcon"),
                    path.resolve('./',"src/plugin")
                ]
            },
            {
                test: /(.js)$/,
                use: [{
                        loader: "babel-loader",
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new MyPlugin()
        // new ErudaWebapckPlugin({force:true})
    ]
};