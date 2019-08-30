var loadIndex = 0;
var loadMax = 0;
function load(){
    var tcon = "./tcon/tcon."+window.newVersion+".min.js";
    var tconCode = "./tconCode/tconCode."+window.newVersion+".min.js";
    var tconLog = "./plugin/log/tcon-log."+window.newVersion+".min.js";
    
    appendScript(tcon);
    appendScript(tconLog);
}

function appendScript(src){
    loadMax++;
    var script = document.createElement('script')
    document.body.appendChild(script);
    script.onload = function(){
        loadIndex++;
        if(loadIndex === loadMax){
            window.TCon.init();
        }
    }
    script.src = src;
}

load();

