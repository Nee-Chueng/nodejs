// 获取文件的扩展名
const path = require("path")
const extname = path.extname(path.join(__dirname, "./file/test.text"))
console.log(extname);//.text