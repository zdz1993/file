import http from "http";
import url from "url";
let port = 8088

http
  .createServer((req, res) => {
    let urlObj = url.parse(req.url, true); // 获取被代理的 URL
    let urlToProxy = urlObj.path;
    console.log(urlObj);
    if (!urlToProxy) {
      res.statusCode = 400;
      res.end("URL 是必须的。");
    } else {
      console.log("处理请求：" + urlToProxy);
      res.end(JSON.stringify({ status: "success" }));
    }
  })
  .listen(port, "localhost");

console.log(`代理服务器已经在 ${port} 端口启动。`);
