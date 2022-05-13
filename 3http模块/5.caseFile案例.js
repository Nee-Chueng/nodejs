// 
const fs = require("fs")
const path = require("path")
const http = require("http")

// 
const server = http.createServer()
server.on("request", (req, res) => {
  console.log('被访问');
  // 客户端访问/caseFile/newindex.html
  const url = req.url
  // 将客户端的地址拼接成绝对路径地址
  const fullPath = path.join(__dirname, url)
  fs.readFile(fullPath, "utf-8", (err, val) => {
    if (err) return res.end('<h1>404 page not found</h1>');
    res.end(val)
  })

})
server.listen(80, () => {
  console.log("服务已在 http://127.0.0.1 启动");
})