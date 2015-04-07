//load dependencies
var express = require('express');
var bodyParser = require('body-parser');
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


// // database write, read
// _POST
//


//start listening for requests on port 3000
app.listen(3000,function(){
  console.log('listening on 3000!!');
});