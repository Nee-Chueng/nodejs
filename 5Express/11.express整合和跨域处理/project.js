const express = require('express');
const app = express();
const cors = require("cors")
// 中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// 路由引入
const router = require("./router")
// 加个/api前缀
app.use("/api", router)

app.listen(80, () => {
  console.log('running');
})
