var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/giftMe");

var Gift   = mongoose.Schema({
  name:  String,
  amazon_url: String,
});

var User    = mongoose.Schema({
  name: String,
  birthday: String,
  gifts: [Gift]
});

mongoose.model("Gift", Gift);
mongoose.model("User", User);

module.exports = mongoose;
