let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "10.19.144.50",
  port: "8337",
  user: "root",
  password: "",
  database: "filedata"
});

connection.connect();

connection.query("SELECT * from platform_text", function(err, rows, fields) {
  if (err) throw err;
  console.log("SELECT ==> ");
  for (let i in rows) {
    console.log(rows[i]);
  }
});

connection.end();
