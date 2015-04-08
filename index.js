//load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var moviesCtrl = require("./controllers/movies");
var favoritesCtrl = require("./controllers/favorites");
var db = require("./models");
var router = express.Router();
//dependency for scraping sites
var request = require('request');

// WHERE DOES THIS GO???
// var router = require('./router');




//init express
var app = express();

//set view engine to ejs
app.set('view engine','ejs');

//set static directory
app.use(express.static(__dirname+'/public'));

//load body parser (parses form POST data)
app.use(bodyParser.urlencoded({extended:false}));
// app.use('/',require('./controllers/main.js'));
// app.use('/articles',require('./controllers/articles.js'));

app.use("/movies", moviesCtrl);
app.use("/favorites", favoritesCtrl);

app.get("/", function(req, res) {
  res.render("index");
});
// app.get("/", function(req, res) {
//   res.send("Hello!");
// });

  db.movie.create({movieTitle: "IN HEROKU"}).then(function(createdUser) {
  // console.log("this user was just create: ", user.firstName);
  // createdUser.lastName = "Bridgpal"
  // createdUser.save();
  createdUser.set("date", "wtf tho").save();
  // res.render("someTemplate", {user: user});
});

db.movie.findOrCreate({where: {movieTitle: "HEROKUgitACEMAN"}})
.spread(function(foundUser, created) {
  console.log(foundUser.get());
  console.log(created);
}).catch(function(error) {
  console.log("something happened");
  console.log(error);
})

// movie.createOthertable()

// // database write, read
// _POST
//


//start listening for requests on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on 3000 baby!!!");
})