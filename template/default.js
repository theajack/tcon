
let version = require('../version.json').version;
let def = {
    gitRes: 'https://git.code.oa.com/tackchen/tcon',
    online: 'https://www.theajack.com/tcon',
    imgSrcBase: 'https://www.theajack.com/tcon/images/',
    installTcon: '@tencent/tcon',
    installLog: '@tencent/tcon-log',
    installLoader: '@tencent/tcon-loader',
    scriptSrcBase: 'https://www.theajack.com/tcon/',
    version:version,
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