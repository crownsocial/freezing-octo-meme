"use strict";
module.exports = function(sequelize, DataTypes) {
  var movie = sequelize.define("movie", {
    movieTitle: DataTypes.STRING,
    date: DataTypes.STRING,
    tomatoRank: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // models.author.hasMany(models.post);
        // models.post.belongsTo(models.author);
      }
    }
  });
  return movie;
};