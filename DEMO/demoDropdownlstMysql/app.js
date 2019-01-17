var http = require('http');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect((err) => {
  if (err) {
    console.log('Can`t connect to database.');
    return;
  }
  console.log('Connected is open.');
});

con.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
  console.log('---------------------------------------------------------------------------');
  rows.forEach( (row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  con.query('SELECT * FROM employees', (err,rows) => {
    if(err) throw err;

    res.write('<html>');
    res.write('<body><table border = 1 style="border-collapse: collapse;">');
    rows.forEach( (row) => {
      var data = row.name + ' is in ' + row.location + '.';

      // res.write(data);
      res.write('<tr><td><p>' + data + '</p></td></tr>');
    });
    res.write('</table></body>');
    res.write('<html>');
    res.end();
  });
}).listen(3000);

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
//   console.log(err);
// });