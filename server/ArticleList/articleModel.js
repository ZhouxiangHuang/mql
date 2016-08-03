var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleListSchema = new Schema({
  art_title: String,
  content: String,
  author: String,
  cover_img: String,
  imgs: []
});

module.exports = mongoose.model('ArtList', articleListSchema);
