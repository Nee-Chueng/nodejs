const http = require("http")
const server = http.createServer()
server.on("request", (req, res) => {
  console.log('服务器被访问');
  // req包含了与客户端请求相关的属性
  console.log(req.url);
  console.log(req.method);
})
server.listen(8080, () => {
  console.log('服务启动 http://127.0.0.1:8080');
})