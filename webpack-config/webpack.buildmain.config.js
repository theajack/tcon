let version = require('../helper/version.json').version;

let path = require('path');
let tool = require('../helper/tool');
tool.write('./src/tcon/version.js','export default "'+version+'";')

tool.write('./github/dist/version.js','window.newVersion = "'+version+'";')


module.exports = {
    entry: path.resolve('./',"src/tcon/index.js"),
    output: {
        path: path.resolve('./',"github/dist/tcon"),
        filename: "tcon."+version+".min.js"
    },
    module: {
        rules: [
            {
                test: /(.js)$/,
                use: [{
                        loader: "babel-loader"
                    }],
                exclude: /node_modules/
            },
            {
                test: /(.js)$/,
                use: [{
                        loader: path.resolve('./',"loader/zipCssInJs.js")
                    }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new MyPlugin()
        // new ErudaWebapckPlugin({force:true})
    ]
};