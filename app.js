// DEPENDENCIES
const mysql = require("mysql");

// create connection to MySQL server (hide password!)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Z7bpCIV50E@m",
    database: "employeeDB"
});

// connect to server and throw error if there is one
connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // startQuestions();
});


module.exports = connection;
