const http = require("http")
const server = http.createServer()
server.on("request", (req, res) => {
  console.log('被访问了');
  // 获取请求的url
  const url = req.url
  // 设置默认的内容是404
  let content = '<h2>404 NOT FOUND</h2>'
  if (url === "/" || url === "/index.html") {
    content = "首页的数据"
  } else if (url === "/about.html") {
    content = "关于页面数据"
  }

  res.setHeader("Content-type", "text/html; charset=utf-8")
  res.end(content)
})
server.listen(80, () => {
  console.log('启动了');
})