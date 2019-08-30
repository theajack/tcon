let def = require('./default');
let fs = require('fs')
let TYPE = {
    FULL_README:'FULL_README'
};
let config = {
    FULL_README_OUT:{
        tpl:'./template/README.md',
        des:[
            './github/README.md',
            './npm/tcon/README.md',
        ],
        json:{
            gitRes: 'https://github.com/theajack/tcon',
            installTcon: 'tcon-main',
            installLog: 'tcon-log',
            installLoader: 'tcon-loader',
            scriptSrcBase: 'https://www.theajack.com/tcon/',
            npm:'npm'
        }
    },
    FULL_README_IN:{
        tpl:'./template/README.md',
        des:[
            './README.md',
            './tnpm/tcon/README.md'
        ],
        json:{}
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