var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    })
  }

  if (req.url === "/style.css") {
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {"Content-Type": "text/css"});
      res.write(data);
      res.end();
    })
  }

  if (req.url === "/js/scripts.min.js") {
    fs.readFile('js/scripts.min.js', function(err, data) {
      res.writeHead(200, {"Content-Type": "application/javascript"});
      res.write(data);
      res.end();
    })
  }
}).listen(3000);
