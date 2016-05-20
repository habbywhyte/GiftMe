var mongoose = require("./connection");
var seed_data = require("./gift_seeds");

var User    = mongoose.model("User")

User.remove().then(function(){
  User.collection.insert(seed_data).then(function(){
    process.exit();
  });
});
