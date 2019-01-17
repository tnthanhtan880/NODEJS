var http = require('http');

var option = {
     host: 'localhost'
    ,port: '3005'
    ,path: '/index.html'
};

var callBack = function(response){
    var body = '';
    response.on('data', function(data){
        body += data;
    });
    response.on('end', function(){
        console.log(body);
    });
}

var req = http.request(option, callBack);
req.end();