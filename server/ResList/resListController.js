var Restaurant = require('./resListModel');


module.exports = {
  getList: function(req, res) {
    Restaurant.find({}, function(err, foundList) {
      if (err) {
        return res.end(err);
      }
      else {
        console.log("getList called");
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(foundList));
      }
    })
  },

  postRes: function() {

        var res = new Restaurant({
          res_name: "Nine Dragon",
          address: "123 baross gabor",
          hours: "3:00 - 5:00",
          sp: "none",
          phone: 2138808188,
          img: "testing"
        })

        res.save(function (err, data) {
          if (err) console.log(err);
          else console.log('Saved : ', data );
        });

  }
}
