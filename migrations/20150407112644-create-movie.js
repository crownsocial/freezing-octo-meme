"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      movieTitle: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.STRING
      },
      tomatoRank: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("movies").done(done);
  }
};