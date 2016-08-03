var Restaurant = require('./resListModel');


module.exports = {
  getList: function(req, res) {
    Restaurant.find({}, function(err, foundList) {
      if (err) {
        return res.end(err);
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(foundList));
      }
    })
  },

  postRes: function(resInfo) {
        var res = new Restaurant(resInfo);

        res.save(function (err, data) {
          if (err) console.log(err);
          else console.log('Saved : ', data );
        });

  }
}
