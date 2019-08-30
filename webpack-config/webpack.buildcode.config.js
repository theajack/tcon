let version = require('../helper/version.json').version;
let tool = require('../helper/tool');
let path = require('path');
tool.write('./loader/version.js','module.exports="'+version+'";')

module.exports = {
    entry: path.resolve('./',"loader/tconCode.js"),
    output: {
        path: path.resolve('./',"github/dist/tconCode"),
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
    }
};