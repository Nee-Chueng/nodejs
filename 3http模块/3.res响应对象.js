const http = require("http")
const server = http.createServer()
server.on("request", (req, res) => {
  console.log('被访问了');
  const str = "地址：" + req.url + "方法是：" + req.method
  // 防止中文乱码
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.end(str)
})
server.listen(80, () => {
  console.log('启动了');
})