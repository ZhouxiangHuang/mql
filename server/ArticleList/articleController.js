var Article = require('./articleModel');

module.exports = {
  getArticles: function(req, res) {
    Article.find({}, function(err, foundList) {
      if (err) {
        return res.end(err);
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(foundList));
      }
    })
  },

  postArticle: function(art) {
    console.log("testing postarticle");
    var article = new Article(art);

    article.save(function (err, data) {
      if (err) console.log(err);
      else console.log('Saved : ', data );
    });

  }
}
