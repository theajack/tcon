var tconCode = require('./tconCode')
const loaderUtils = require('loader-utils');
module.exports = function loader(source) {
    // console.log(typeof source);
    // console.log(source);
    const options = loaderUtils.getOptions(this);
    // 获取到用户给当前 Loader 传入的 options
    return tconCode(source,options)
}