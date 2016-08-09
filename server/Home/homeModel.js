var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeImage = new Schema({
  image: Buffer
})

module.exports = mongoose.model('HomeImage', homeImage);
