'use strict';

require('util');

console.log( "おわー" );

document.getElementById("hello").innerText="geb";


var fs = require('fs');

var write_stream = fs.createWriteStream('./output.txt');

write_stream.on('drain', function ()         { console.log('write: drain'); })
            .on('error', function (exeption) { console.log('write: error'); })
            .on('close', function ()         { console.log('write: colse'); })
            .on('pipe',  function (src)      { console.log('write: pipe');  });


var arr = [1, 2, 3, 4, 5];

arr.forEach(function (v) {
    write_stream.write(v + "\n");
});
