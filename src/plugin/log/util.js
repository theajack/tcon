import tool from './tool'
// import TYPE from './type'
export function generateLogBlock(type){
    let block = tool.create('div','log-block log-'+type);
    let hide = tool.create('div','log-block-hide','',()=>{
        block.parentNode.removeChild(block);
    })
    tool.append(hide, tool.create('span','','+'));
    tool.append(block, hide);
    return block;
}
export function copyText(text) {
    var textArea = document.createElement("textarea")

    textArea.style.position = 'fixed'
    textArea.style.background = 'transparent'
    textArea.value = text

    document.body.appendChild(textArea)

    textArea.select()

    try {
        if(document.execCommand('copy')){
            console.tc('复制内容成功');
        }else{
            console.tc('复制内容失败');
        }
    } catch (err) {
        console.error('浏览器不支持复制功能');
    }

    document.body.removeChild(textArea)
}