const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "1234",
    database: "omdb"
});

connection.connect(function(err) {
    if (err) {
        console.error("An error occurred while connecting:", err);
        return;
    }

    console.log("Connection successful as ID:", connection.threadId);
});

connection.query("CREATE DATABASE IF NOT EXISTS omdb", function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});

let createTableStatement = `CREATE TABLE IF NOT EXISTS movies (
   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
   actors varchar(255),
   awards varchar(255),
   country varchar(255),
   director varchar(255),
   genre varchar(255),
   imdbRating varchar(255),
   language varchar(255),
   plot varchar(255),
   poster varchar(255),
   rated varchar(255),
   released varchar(255),
   runtime varchar(255),
   title varchar(255)
) AUTO_INCREMENT=1000;`;

connection.query(createTableStatement, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});

let database = {
    getAllMovies: function() {},
    saveMovie: function(movie) {},
    checkMovieExists: function(title) {},
    getMovieById: function(movieKey) {},
    deleteMovie: function(movieKey) {},
    updateMovie: function(movieKey, changedData){}
};

module.exports = database;
