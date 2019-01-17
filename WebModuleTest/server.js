var http = require('http');
var fs = require('fs');
var url = require('url');

// create server
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;

    console.log('Request from ' + pathName + ' has recieve.');
    fs.readFile(pathName.substr(1), function(err, data){
        if (err){
            console.log(err);
            response.writeHead(404, {'Content-Type' : 'text/html'});
        }else{
            response.writeHead(200, {'Content-Type' : 'text/html'});

            response.write(data.toString());
        }
        response.end();
    });
}).listen(3005);

console.log('Server running in address: http://localhost:3005/');