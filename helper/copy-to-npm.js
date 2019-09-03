var gulp = require('gulp');
var fs = require('fs');
let render = require('../template/render.js')
let version = require('./version.json').version;
let files = [
    '../package.json',
    '../npm/tcon/package.json',
    '../npm/tcon-loader/package.json',
    '../npm/tcon-log/package.json',
    '../tnpm/tcon/package.json',
    '../tnpm/tcon-loader/package.json',
    '../tnpm/tcon-log/package.json',
]

function modVersion(){
    files.forEach(file=>{
        var package = require(file)
        package.version = version;
        fs.writeFile(file.substr(1), JSON.stringify(package,null, 4), 'utf8', (err) => {
            if (err) throw err;
        });
    })
}


function task(){
    modVersion();

    gulp.src('src/tcon/**/*')
        .pipe(gulp.dest('./tnpm/tcon'))
        .pipe(gulp.dest('./npm/tcon'));
    
    gulp.src('src/plugin/log/**/*')
        .pipe(gulp.dest('./tnpm/tcon-log'))
        .pipe(gulp.dest('./npm/tcon-log'));
    
    gulp.src(['loader/*.js','loader/*.json','README.md'])
        .pipe(gulp.dest('./tnpm/tcon-loader'))
        .pipe(gulp.dest('./npm/tcon-loader'));


    gulp.src('loader/**/*')
        .pipe(gulp.dest('./github/loader'));
    gulp.src('public/**/*')
        .pipe(gulp.dest('./github/public'));
    gulp.src('src/**/*')
        .pipe(gulp.dest('./github/src'));
    gulp.src('template/**/*')
        .pipe(gulp.dest('./github/template'));
    gulp.src('helper/**/*')
        .pipe(gulp.dest('./github/helper'));
    gulp.src('webpack-config/**/*')
        .pipe(gulp.dest('./github/webpack-config'));
    gulp.src(['*.json','.babelrc','.gitignore','LICENSE'])
        .pipe(gulp.dest('./github'))
        .on('end',function(){
            render();
        });
    gulp.src('github/dist/plugin/**/*')
        .pipe(gulp.dest('./assets/plugin'));
    gulp.src('github/dist/tcon/**/*')
        .pipe(gulp.dest('./assets/tcon'));
    gulp.src('github/dist/tconCode/**/*')
        .pipe(gulp.dest('./assets/tconCode'));
}
task();