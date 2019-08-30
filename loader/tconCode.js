// var a=a.a.a; 直接赋值
const recast = require('recast');
const version = require('./version.js');

const {
  tryStatement,
  blockStatement,
  catchClause,
  callExpression,
  memberExpression,
  expressionStatement,
  identifier
} = recast.types.builders
const TNT = recast.types.namedTypes

// 当try catch了一个表达式时，是否继续深度遍历

const DISABLE_REG = /\/\*.*tcon-disable.*\*\//
function isDisabled(code){
    // return DISABLE_REG.test(code.substring(0,code.indexOf('\n')))
    return DISABLE_REG.test(code);
}

const importReg = /import\(/g;
const reimportReg = /__import\(/g;
const importCode = 'import(';
const preFix = '__';
let options={
    traverse:true,
    Expression:true,
    Return:false,
    Throw:false,
    Declaration:false,
    context:false,
    trace:false
};
function dealCode(code){
    return code.replace(importReg,preFix+importCode)
}

function resetCode(code){
    return code.replace(reimportReg,importCode)
}

function tconCode(code,opts) {
    for(var k in opts){
        if(k in options){
            options[k] = opts[k];
        }else{
            throw new Error('Unknown configuration: ['+k+'] in tcon-loader\n Valid configuration is ['+Object.keys(options).toString())+']'
        }
    }
    if(isDisabled(code.trim())){
        return code;
    }
    // console.log(code)
    let needDealCode = code.indexOf(importCode)!==-1;
    if(needDealCode){
        code=dealCode(code);
    }
    const ast = recast.parse(code)

    var visitor={};
    if(options.Expression){
        visitor.visitExpressionStatement = function(path) {
            if (!TNT.ExpressionStatement.check(path.node)) {
                throw new Error('TNT.ExpressionStatement.check(node)=false')
            }
            if(!refactor.call(this,path)){
                return false;
            }
        }
    }

    let commonFunc = function(path){
        if(!refactor.call(this,path)){
            return false;
        }
    };

    if(options.Return){
        visitor.visitReturnStatement = commonFunc;
    }
    if(options.Throw){
        visitor.visitThrowStatement = function(path){
            if(!refactor.call(this,path, true)){
                return false;
            }
        };
    }
    if(options.Declaration){
        visitor.visitVariableDeclaration = commonFunc;
    }


    recast.visit(ast, visitor)
    
    if(needDealCode){
        return resetCode(recast.print(ast).code);
    }
    return recast.print(ast).code;
}
tconCode.version = version;

function refactor(path, isThrow){

    let block = blockStatement([path.node]);

    let args = [identifier('error')]
    if(options.context){
        args.push(identifier('this'));
    }
    let callee = memberExpression(memberExpression(identifier('window'), identifier('TCon')),identifier('f'));
    if(options.trace){
        callee = memberExpression(callee,identifier('trace'))
    }
    if(isThrow){
        callee = memberExpression(callee,identifier('thr'))
    }
    let catchBlock = blockStatement([expressionStatement(callExpression(callee, args))])

    let catchObj = catchClause(identifier('error'), null, catchBlock)
    let tryBlock = tryStatement(block, catchObj)

    if (options.traverse) {
        this.traverse(path)
        path.replace(tryBlock)
        return true;
    } else {
        path.replace(tryBlock)
        return false
    }
}
if(typeof window ==='object'){
    if(window.TCon){
        window.TCon.code = tconCode;
    }else{
        window.tconCode = tconCode
    }
}
module.exports = tconCode;
