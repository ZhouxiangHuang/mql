var Article = require('./articleModel');

module.exports = {
  getArticles: function() {
    console.log("testing getarticle");
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
