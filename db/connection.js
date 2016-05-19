var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/giftMe");

var Gift   = mongoose.Schema({
  name:  String,
  photo_url: String,
  description: String
});

var User    = mongoose.Schema({
  name: String,
  birthday: Date
  gifts: [Gift]
});

mongoose.model("Gift", Gift);
mongoose.model("User", User);

module.exports=mongoose;
