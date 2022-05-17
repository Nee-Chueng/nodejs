// 路由
const express = require("express")
const router = express.Router()
// get
router.get("/get", (req, res) => {
  const query = req.query
  res.send(
    {
      status: 0,
      msg: "GET接口调用成功",
      data: query
    }
  )
})

// post
router.post("/post", (req, res) => {
  const body = req.body
  res.send(
    {
      status: 0,
      msg: "post接口调用成功",
      data: body
    }
  )
})
module.exports = router