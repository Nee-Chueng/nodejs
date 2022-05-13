// path.basename()可以获取路径中的最后一部分。经常用来获取路径中的文件名
const path = require("path")
const val = path.basename(path.join(__dirname, "./file/test.text"))
console.log(val);//test.text

const val2 = path.basename(path.join(__dirname, "./file/test.text"), ".text")
console.log(val2);//test