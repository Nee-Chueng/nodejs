const fs = require("fs")

// 读取对应文件内容------------------------------
// fs.readFile("./fs文件模块/fs.text", "utf8", (err, val) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(val);
// })

// 相对应文件中写入内容-----------------------
fs.writeFile("./fs文件模块/fs.text", "fs写入的内容1", "utf8", err => {
  if (err) {
    console.log(err);
  }
})