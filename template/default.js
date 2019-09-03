
let version = require('../helper/version.json').version;
let def = {
    online: 'http://tcon.pages.oa.com/',
    imgSrcBase: 'http://tcon.pages.oa.com/assets/images/',
    gitRes: 'https://git.code.oa.com/tackchen/tcon',
    installTcon: '@tencent/tcon',
    installLog: '@tencent/tcon-log',
    installLoader: '@tencent/tcon-loader',
    scriptSrcBase: 'http://tcon.pages.oa.com/assets/',
    version:version,
    versionMd:'https://git.code.oa.com/tackchen/tcon/blob/master/helper/version.md',
    buildMd:'https://git.code.oa.com/tackchen/tcon/blob/master/helper/README.build.md',
    npm:'tnpm'
}

module.exports = {
    check:function(json){
        for(var k in def){
            if(typeof json[k] === 'undefined'){
                json[k] = def[k];
            }
        }
    },
    json:def
}