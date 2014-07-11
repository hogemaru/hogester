var fs = require('fs');
fs.readdir('.', function(err, files){
    if (err) throw err;
    var fileList = [];
    files.filter(function(file){
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        fileList.push(file);
    });
    console.log(fileList);
});