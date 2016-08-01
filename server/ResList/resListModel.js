var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resListSchema = new Schema({
  res_name: String,
  address: String,
  hours: String,
  sp: String,
  phone: Number,
  img: String
})

module.exports = mongoose.model('ResList', resListSchema);
