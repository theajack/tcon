let version = require('./version.json').version;

module.exports = (env)=>{
    let plugin = env.pluginname;
    return {
        entry: __dirname + "/src/plugin/"+plugin+"/index.js",
        output: {
            path: __dirname + "/github/dist/plugin/log",
            filename: "tcon-"+plugin+"."+version+".min.js"
        },
        module: {
            rules: [
                {
                    test: /(.js)$/,
                    use: [{
                            loader: "babel-loader"
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        }
    };
}