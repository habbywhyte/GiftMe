var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("This is working!");
});

app.listen(3001, function(){
  console.log("yay!");
});
