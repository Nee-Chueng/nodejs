// 导入http模块
const http = require("http")
// 创建服务器实例
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on("request", (req, res) => {
  console.log('服务器被访问');
})
// 启动服务器
server.listen(8080, () => {
  console.log('服务器启动 http://127.0.0.1:8080');
})