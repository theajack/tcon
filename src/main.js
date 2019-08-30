
// import tcon from '@tencent/tcon';
// import '@tencent/tcon-log';
import tcon from './tcon';
import './plugin/log';
import Test from './plugin/test';
// import a from './test';
// tcon.init();
tcon.init(1);
// tcon.init(1);
// new a();
async function ff(){
    // await a.f1();
    var x=1;
    a.a=x;
};
var aw={aa:function(){}};
window.ff=function(){
    debugger;
}
// var a={
//     f1:function(){
//         aw.aa(()=>{
//             aw.aa();
//         });
//         var a=function(){
//             aw.aa();
//         }
//     },
//     f2:function(){
//         var json = {};
//         json.a.a.a=1;
//         throw new Error(111)
//         return this.f1();
//     }
// };
// a.f2();
// var b=a.f1();
// var c=1;
// console._log(11)
// throw new Error('111')

// var x={...{xx:1}}
// window.a=a;
// // tcon.use(log);
// // import CodeMirror from 'codemirror';
// window.test=function(){
//     console.log(a.a.a.a)
// }
// window.throwError=function(){
//     throw new Error(111)
// }
// // window.gene = function(){
// //     CodeMirror.fromTextArea(document.getElementById('Code'))
// // }
// console.log('11111111111');
// // a.a.a.a=1;
// document.getElementById("root").innerText = a.a;
// var myCodeMirror = CodeMirror(document.body, {
//     value: "function myScript(){return 100;}\n",
//     mode:  "javascript"
//   });