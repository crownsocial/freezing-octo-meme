var express = require('express');
var router = express.Router();
var request = require('request');


router.get("/", function(req,res) {
  var query = req.query.q;
  var url = "http://www.omdbapi.com/?s=" + query;
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movieData = JSON.parse(data);
    // res.send(movieData.Search[0]);
    res.render("movies/index", movieData);

  }
  })
})

router.get("/:imdbId", function(req, res) {
  var query = req.params.imdbId;
  var url = "http://www.omdbapi.com/?i=" + query + "&tomatoes=true";
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movieData = JSON.parse(data);
    // res.send(movieData.Title);
    res.render("movies/show", movieData);

  }
  })

  // res.send(req.params);
  // res.send("hey there " + req.params.name + " " + req.params.lastname);
});


// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

// router.get("/hello", function(req, res) {
//   res.send("hello");
// })

// router.get("/", function(req, res) {
//   res.send(req.query);
// })

module.exports = router;