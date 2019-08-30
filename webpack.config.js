// const MyPlugin = require('./plugin/plugin1')
// const ErudaWebapckPlugin = require('eruda-webpack-plugin')
const path = require('path')
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        host:'0.0.0.0' //'localhost'//
    },
    module: {
        rules: [
            {
                test: /(.js)$/,
                use: [
                    {
                        loader: path.resolve('loader/index.js')
                    }
                ],
                exclude: [
                    /node_modules/, 
                    path.resolve(__dirname, "src/tcon"), 
                    path.resolve(__dirname, "src/plugin")
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