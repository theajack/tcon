let version = require('./version.json').version;

module.exports = {
    entry: __dirname + "/loader/tconCode.js",
    output: {
        path: __dirname + "/github/dist/tconCode",
        filename: "tconCode."+version+".min.js"
    },
    module: {
        rules: [
            {
                test: /(.js)$/,
                use: [{
                        loader: "babel-loader"
                    }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ]
};