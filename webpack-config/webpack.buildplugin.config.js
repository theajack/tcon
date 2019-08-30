let version = require('../helper/version.json').version;

let path = require('path');
let tool = require('../helper/tool');

module.exports = (env)=>{
    let plugin = env.pluginname;
    tool.write('./src/plugin/'+plugin+'/version.js','export default "'+version+'";')
    return {
        entry: path.resolve('./',"src/plugin/"+plugin+"/index.js"),
        output: {
            path: path.resolve('./',"github/dist/plugin/"+plugin),
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