"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var PORT = 8010;

var connection = _mysql2["default"].createConnection({
  host: "10.19.144.50",
  port: "8337",
  user: "root",
  password: "",
  database: "filedata"
});

var app = (0, _express2["default"])();
connection.connect();

var httpServer = _http2["default"].createServer(app);

httpServer.listen(PORT, function () {
  console.log("HTTP Server is running on: http://localhost:%s", PORT);
});

console.log(httpServer);

app.get("/", function (req, res) {
  connection.query("SELECT * from platform_text", function (err, rows, fields) {
    if (err) throw err;
    res.status(200).send(rows);
  });
  //   connection.end();
});