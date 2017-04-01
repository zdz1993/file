var mysql =  require("mysql");
let connection = mysql.createConnection({
  host: "http://10.19.144.50",
  user: "root",
  password: "56531056zdz",
  database: "filedata"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
