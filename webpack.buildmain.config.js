let version = require('./version.json').version;

let fs = require('fs')

var gulp = require('gulp');
gulp.src('./version.json')
    .pipe(gulp.dest('./src/tcon'));

function modVersion(){
    fs.writeFile('./github/dist/version.js', 'window.newVersion = "'+version+'";', 'utf8', (err) => {
        if (err) throw err;
    });
}
modVersion();

module.exports = {
    entry: __dirname + "/src/tcon/index.js",
    output: {
        path: __dirname + "/github/dist/tcon",
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
                        loader: __dirname + "/loader/zipCssInJs.js"
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