const path = require("path")
const fs = require("fs")
//  path.join()将多个路径片段拼接成一个完整的路径字符串---------------
// const pathStr = path.join("/a", "/b")
// console.log(pathStr);//结果"\a\b"


// 读文件路径升级写法（不使用字符串拼接“+”写法）-----------
fs.readFile(path.join(__dirname, "./file/test.text"), "utf-8", (err, val) => {
  err ? console.log('读取失败' + err) : console.log('文件内容：' + val);;
})
