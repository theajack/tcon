var loadIndex = 0;
var loadMax = 0;

var base = 'https://www.theajack.com/tcon/dist/'

function getLatestVersion(){
    loadScript('version.js',function(){
        load();
    })
}

function load(){
    var tcon = "tcon/tcon."+window.newVersion+".min.js";
    var tconCode = "tconCode/tconCode."+window.newVersion+".min.js";
    var tconLog = "plugin/log/tcon-log."+window.newVersion+".min.js";
    
    loadScript(tcon,function(){
        appendScript(tconLog)
    })
    // appendScript(tcon);
    // appendScript(tconLog);
}

function appendScript(src){
    loadMax++;
    loadScript(src,function(){
        loadIndex++;
        if(loadIndex === loadMax){
            window.TCon.init();
        }
    })
}
function loadScript(src,cb){
    var script = document.createElement('script')
    document.body.appendChild(script);
    script.onload = function(){
        cb();
    }
    script.src = base+src;
}


getLatestVersion();

