var express = require('express');
var app = express();
var fs = require("fs");

/* app.get('/', function(req, res){
    res.send('Hay doi day');
}); */

var bodyParser = require('body-parser');
var multer  = require('multer');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function (req, res) {

    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

 app.get('/upload.html', function (req, res) {
    res.sendFile( __dirname + "/" + "upload.html" );
 })

 app.post('/file_upload', function (req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
 
    var file = __dirname + "/" + req.files.file.name;
    fs.readFile( req.files.file.path, function (err, data) {
         fs.writeFile(file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File duoc upload thanh cong!',
                    filename:req.files.file.name
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })

app.get('/', function(req, res){
    console.log("Nhan mot GET Request ve Homepage");
   res.send('Hello GET');
});

app.post('/', function (req, res) {
    console.log("Nhan mot POST Request ve Homepage");
    res.send('Hello POST');
 })

 app.delete('/del_user', function (req, res) {
    console.log("Nhan mot DELETE Request ve /del_user");
    res.send('Hello DELETE');
 })

 app.get('/list_user', function (req, res) {
    console.log("Nhan mot GET Request ve /list_user");
    res.send('Page Listing');
 })

 app.get('/ab*cd', function(req, res) {
    console.log("Nhan mot GET request ve /ab*cd");
    res.send('Page Pattern Match');
 })

var server = app.listen(3005, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Server has running at address http://' + host + '/' + port);
});