// 使用fs模块操作文件时，如果提供的操作路径是./或者../的相对路径没会出现动态拼接错误
// 因为代码运行的时候，会议执行node命令时，所在的目录去拼接出被操作文件的完整路径

// 解决方案一：可以提供绝对路径，一个完整的文件存放路径（缺陷：移植性差，不方便维护）

// 解决方案二：使用node提供的__dirname(表示当前文件所处的目录)
const fs = require("fs")
fs.readFile(__dirname + "/fs.text", "utf8", (err, val) => {
  if (err) {
    console.log(err);
  }
  console.log(val);
})
