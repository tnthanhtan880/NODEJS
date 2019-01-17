var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('fileInput2.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);

    console.log("..........End..........");
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

var dateTime = new Date();
var addStr = ' study nodeJS';

var writerStream = fs.createWriteStream('fileInput2.txt');
writerStream.write(dateTime.toString(), 'UTF8');
writerStream.end();
writerStream.on('finish', function() {
    console.log('Da ghi xong. (^.^)')
});