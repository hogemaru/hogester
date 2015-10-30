'use strict';

var fs = require('fs');
fs.readdir('.', function(err, files){
    if (err) throw err;
    var fileList = [];
    files.filter(function(file){
//        return file && fs.statSync(file).isFile() && /.*\.txt$/.test(file); //絞り込み
//		console.log( file );
		return true;
    }).forEach(function (_file) {
    	var file = "./"+_file;
    	if( fs.statSync(file).isDirectory() ){
	        fileList.push("dir:"+file);
    	}else{
	        fileList.push(file);
    	}
    });
//   console.log(fileList);

	var str = "";
	fileList.map(function(a){
		str += a+"<br>";
	});


	document.getElementById("output").innerHTML = str;
	console.log( "owaaaa" );
});
