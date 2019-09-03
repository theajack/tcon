let def = require('./default');
let fs = require('fs')
let TYPE = {
    FULL_README:'FULL_README'
};
let githubBase = 'https://github.com/theajack/tcon'
let outJson = {
    gitRes: githubBase,
    installTcon: 'tcon-main',
    installLog: 'tcon-log',
    installLoader: 'tcon-loader',
    scriptSrcBase: 'https://www.theajack.com/tcon/dist/',
    imgSrcBase: 'https://www.theajack.com/tcon/images/',
    npm:'npm',
    versionMd: githubBase+'/blob/master/helper/version.md',
    buildMd: githubBase+'/blob/master/helper/README.build.md',
    online: 'https://www.theajack.com/tcon',
    imgSrcBase: 'https://www.theajack.com/tcon/images/',
}
let inJson = {
}

let config = {
    FULL_README_OUT:{
        tpl:'./template/README.md',
        des:[
            './github/README.md',
            './npm/tcon/README.md',
            './npm/tcon-loader/README.md',
            './npm/tcon-log/README.md',
        ],
        json:outJson
    },
    FULL_README_IN:{
        tpl:'./template/README.md',
        des:[
            './README.md',
            './tnpm/tcon/README.md',
            './tnpm/tcon-loader/README.md',
            './tnpm/tcon-log/README.md',
        ],
        json:inJson
    },
    INDEX_HTML_OUT:{
        tpl:'./template/index.html',
        des:[
            './github/dist/index.html',
        ],
        json:outJson
    },
    INDEX_HTML_IN:{
        tpl:'./template/index.html',
        des:[
            './index.html',
        ],
        json:inJson
    }
};

function read(file,cb){
    fs.readFile(file,{encoding:'utf-8'}, function (err,str) {
        if (err) throw err;
        if(cb){cb(str)}
    });
}

function write(file,str,cb){
    fs.writeFile(file, str, 'utf8', (err) => {
        if (err) throw err;
        if(cb){
            cb();
        }
    });
}
function render(str,json){
    for(var k in json){
        str=str.replace(new RegExp('\\${'+k+'}','g'),json[k]);
    }
    return str;
}
module.exports = function(cb){
    let keys = Object.keys(config);
    let i = 0;
    for(var k in config){
        renderSingle(k,function(){
            i++;
            if(i>=keys.length){
                if(cb){cb()};
            }
        })
    }
}

function renderSingle(name,cb){
    var obj = config[name]
    var json = obj.json;
    def.check(json);
    read(obj.tpl,function(str){
        str = render(str,json);
        var i = 0,n = obj.des.length;
        obj.des.forEach(function(file){
            write(file,str,function(){
                i++
                if(i>=n){
                    if(cb){cb()};
                }
            })
        })
    })
}