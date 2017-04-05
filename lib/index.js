"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

var port = 8088;

_http2["default"].createServer(function (req, res) {
  var urlObj = _url2["default"].parse(req.url, true); // 获取被代理的 URL
  var urlToProxy = urlObj.path;
  console.log(urlObj);
  if (!urlToProxy) {
    res.statusCode = 400;
    res.end("URL 是必须的。");
  } else {
    console.log("处理请求：" + urlToProxy);
    res.end(JSON.stringify({ status: "success" }));
  }
}).listen(port, "localhost");

console.log("代理服务器已经在 " + port + " 端口启动。");