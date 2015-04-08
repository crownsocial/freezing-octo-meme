var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var db = require("../models");


router.post('/',function(req,res){
  db.movie.create({movieTitle: req.body.movieTitle, date: req.body.imdbID, tomatoRank: 1}).then(function(data){
    res.send("helloW!!");
  })
});

router.delete('/:id',function(req,res){
  db.movie.destroy({where:{date:req.params.id}}).then(function(){
    res.send({result:true});
    res.send("helloW!!");
  });
});
module.exports = router;