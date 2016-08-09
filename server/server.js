var http = require('http');
var fs = require('fs');
var resController = require('./ResList/resListController');
var artController = require('./ArticleList/articleController');
var homeController = require('./Home/homeController');
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/mql');

db.on('error', function (err) {
console.log('connection error', err);
});

db.once('open', function () {
console.log('connected.');
});

// fs.readFile('img/image1.jpg', function(err, data) {
//   var obj = {};
//   obj.image = data;
//   homeController.postImage(obj);
// });

http.createServer(function(req, res) {

  if (req.url === '/homeImage') {
    return homeController.getImage(req, res);
  }

  if (req.url === '/restaurant') {
    return resController.getList(req, res);
  }

  if (req.url === '/articles') {
    return artController.getArticles(req, res);
  }

  if (req.url === "/") {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      return res.end();
    })
  }

  if (req.url === "/style.css") {
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {"Content-Type": "text/css"});
      res.write(data);
      return res.end();
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
