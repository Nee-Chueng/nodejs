// 将成绩小红=99 小白=22 小李=65 小明=22处理成以下格式，并写入到finish文件中
/**
 * 名字1：分数
 * 名字2：分数
 * 名字3：分数
 */
const fs = require("fs")
fs.readFile("./chengji.text", "utf-8", (err, val) => {
  if (err) {
    console.log('读取失败' + err);
  }
  let newtext = val.split(" ")
  const newArr = []
  newtext.forEach(el => {
    newArr.push(el.replace("=", ":"))
  })
  const finish = newArr.join("\r\n")
  fs.writeFile("./finish.text", finish, "utf-8", err => {
    err ? console.log('写入失败' + err) : console.log('成功写入');;
  })
})