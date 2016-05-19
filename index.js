var express = require("express");
var hbs = require("express-handlebars");
var parser =require("body-parser");
var mongoose = require("./db/connection");

var app = express();
var User= mongoose.model("User");

app.use(parser.json({extended: true}));
app.use("/assets", express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:    ".hbs",
  layoutsDir: "views",
  partialsDir: "views",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  res.render("layout-main", {layout: false});
});

app.get("/api/users", function(req, res){
  User.find().then(function(users){
    res.json(users);
  });
});

app.post("/api/users", function(req, res){
  User.create(req.body).then(function(user){
    res.json(user);
  });
});

app.listen(3001, function(){
  console.log("yay!");
});
