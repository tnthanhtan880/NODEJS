var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  logWrite(res);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);

// http://localhost:3000/<abc>
http.createServer(function (req, res) {
  logWrite(res);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(3000);

// http://localhost:3001/?year=2018&month=January
http.createServer(function (req, res) {
  logWrite(res);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3001);

// http://localhost:3002
http.createServer(function (req, res) {
  logWrite(res);
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3002);

function logWrite(req)
{
  //console.log(req);
  //var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  // fs.writeFileSync('log.txt', JSON.stringify(req));
   fs.appendFile('log.txt', dt.myDateTime() + ' - ' + JSON.stringify(req) + ' \r\n', function (err) {
     if (err) throw err;
     console.log('Saved!!!(^.^)');
   });
}