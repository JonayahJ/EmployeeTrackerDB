// DEPENDENCIES
const mysql = require("mysql");
// const prompts = require("prompts.js");

// create connection to MySQL server (hide password!)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Z7bpCIV50E@m",
    database: "employeeSeeds"
});

// connect to server and throw error if there is one
connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

// console log what's in the db tables
function afterConnection() {
    connection.query("SELECT * FROM department", function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
    connection.query("SELECT * FROM position", function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
  }

