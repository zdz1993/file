const PORT = 8010;

import express from "express";
import path from "path";
import http from "http";
import mysql from "mysql";

let connection = mysql.createConnection({
  host: "10.19.144.50",
  port: "8337",
  user: "root",
  password: "",
  database: "filedata"
});

let app = express();
connection.connect();

const httpServer = http.createServer(app);

httpServer.listen(PORT, function() {
  console.log("HTTP Server is running on: http://localhost:%s", PORT);
});

console.log(httpServer);

app.get("/", function(req, res) {
  connection.query("SELECT * from platform_text", function(err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows);
  });
  //   connection.end();
});
