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

connection.end();

let database = {
    getAllMovies: function() {},
    saveMovie: function(movie) {},
    checkMovieExists: function(title) {},
    getMovieById: function(movieKey) {},
    deleteMovie: function(movieKey) {},
    updateMovie: function(movieKey, changedData){}
};

module.exports = database;
