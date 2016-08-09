var Home = require('./homeModel');

module.exports = {
  getImage: function(req, res) {
    Home.find({}, function(err, foundImg) {
      if (err) {
        return res.end(err);
      }
      else {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        console.log("found image", foundImg[0].image);
        return res.end(foundImg[0].image);
      }
    })
  },

  postImage: function(objWithBuffer) {
    var home = new Home(objWithBuffer);

    home.save(function (err, data) {
      if (err) console.log(err);
      else console.log('Saved : ', data );
    });
  }
}
