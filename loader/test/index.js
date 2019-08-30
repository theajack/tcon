// var a=a.a.a; 直接赋值
// 

const recast = require("recast");
const fs = require("fs");

const {
    variableDeclaration,
    variableDeclarator,
    functionExpression,
    tryStatement,
    blockStatement,
    catchClause,
    callExpression,
    memberExpression,
    assignmentExpression,
    expressionStatement,
    identifier
} = recast.types.builders
recast.types.builders.tryStatement;
const TNT = recast.types.namedTypes


// 当try catch了一个表达式时，是否继续深度遍历
let TRAVERSE = true;

function write(json){
    fs.writeFile('./ast/result.json', JSON.stringify(json,null, 4), 'utf8', (err) => {
        if (err) throw err;
    });
}
// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
function code1(){
    // try {
    //     a=2;
    // } catch (error) {
    //     console.error(error);
    // }
    // function add(a, b) {
    //     return a +
    //     // 有什么奇怪的东西混进来了
    //     b
    // }
    // add(1,2)
    return /*javascript*/`
    var a=1;
    var b={
        a:function(){

        }
    }
    var c = function(){
        
    }
    var cc = new c()
    if(a.x()){

    }else if(a==2){

    }else{

    }

    delete a.a

    switch(a){
        case 1:a--;break;
        case 2:{
            a=3;
            a.x()
        };break;
        default:break;
    }

    for(var i=0;i<a;i++){

    }

    try {
        a=3
    } catch (error) {
        console.log(11)
    }

    while(a<10){
        a++;
    }
    new A({
        a:function(){
            return 1;
        }
    })
    var a=1;
    function add(){
        var a=1;
        function add2(){
            var a=1;
            a.aa.a=3;
            a=v=c=1;
        }
        return a.a.a.a.a;
    }
    /*javascript*/`
}
    
    
const code = 
    /*javascript*/`
    /** tcon-disable */
    import { a } from "module";
    new a({
        a:1
    })
    async function aa(){
        await a.a()

        var a= a.a.a.a
    }
    `

var hasClear=false;
function clear(){
    fs.writeFile('./ast/result.json', '', 'utf8', (err) => {
        if (err) throw err;
    });
}
function append(node){
    // if(!hasClear){
    //     clear();
    //     hasClear = true;
    // }

    fs.appendFile('./ast/result.json', JSON.stringify(node,null, 4)+'\n', 'utf8', (err) => {
        if (err) throw err;
    });
};



const DISABLE_REG = /\/\*.*tcon-disable.*\*\//
function isDisabled(code){
    return DISABLE_REG.test(code.substring(0,code.indexOf('\n')))
}

function main(code){
    if(isDisabled(code.trim())){
        return;
    }
    const ast = recast.parse(code);
    // write({a:1})
    const add  = ast.program.body[1]
    var arr=[];
    // write(a)
    var index=0;
    // clear();
    // write(ast.program.body);
    
    // visitExpressionStatement
    // visitMemberExpression
    // visitVariableDeclaration
    // visitReturnStatement
    
    // 
    recast.visit(ast, {
        visitExpressionStatement: function(path) {
            // // if(index===2){
            // //     // console.log(node);
            // // }
            // if(node.expression.type === 'AwaitExpression'){
    
            // }
            const node = path.node
    
            if(!TNT.ExpressionStatement.check(node)){
                throw new Error('TNT.ExpressionStatement.check(node)=false')
            }
    
            // const rep1 = variableDeclarator(assignmentExpression('=', memberExpression(id('exports'), funcName),arrowFunctionExpression(params, body)))
    
            
    // export interface CatchClauseBuilder {
    //     (param: K.PatternKind | null | undefined, guard: K.ExpressionKind | null | undefined, body: K.BlockStatementKind): namedTypes.CatchClause;
    //     from(params: {
    //         body: K.BlockStatementKind;
    //         comments?: K.CommentKind[] | null;
    //         guard?: K.ExpressionKind | null;
    //         loc?: K.SourceLocationKind | null;
    //         param?: K.PatternKind | null;
    //     }): namedTypes.CatchClause;
    // }
    
            let block = blockStatement([node]);
    
            let args = [identifier('error'), identifier('this')]
            let callee = memberExpression(identifier('window'), identifier('mdebug'))
            let catchBlock = blockStatement([expressionStatement(callExpression(callee, args))])
    
            let catchObj = catchClause(identifier('error'), null, catchBlock)
            let tryBlock = tryStatement(block, catchObj)
            // console.log(index++);
            // console.log(path.value);
            // console.log(path.name);
            // append(node);
            if(TRAVERSE){
                this.traverse(path);
                path.replace(tryBlock)
            }else{
                path.replace(tryBlock)
                return false;
            }
        }
      });
      write(recast.print(ast).code.split('\r\n'))
    //   write(ast.program.body);
    // write(ast.program.body);
    // console.log(JSON.stringify(add))
    
    // 将准备好的组件置入模具，并组装回原来的ast对象。
    // ast.program.body[0] = variableDeclaration("const", [
    //     variableDeclarator(add.id, functionExpression(
    //         null, // Anonymize the function expression.
    //         add.params,
    //         add.body
    //     ))
    // ]);
      
    // //将AST对象重新转回可以阅读的代码
    // const output = recast.print(ast).code;
    
    
    // console.log(output)
}
main(code)
// console.log(ast.program.body)
// module.exports = {generateCode,write};