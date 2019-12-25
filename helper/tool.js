const fs = require('fs');
function write(file, content){
    fs.writeFile(file, content, 'utf8', (err) => {
        if (err) throw err;
    });
}

module.exports = {
    write
}