const fs = require("fs")
const path = require("path")

// 正则匹配style,script
//   \s空白字符   \S非空白字符  *匹配任意次数
const regstyle = /<style>[\s\S]*<\/style>/
const regscript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, "./index.html"), "utf8", (err, val) => {
  if (err) {
    console.log('读取失败' + err);
  }
  //解析每个标签对应的内容
  resolveCSS(val)
  resolveScript(val)
  resolveHtml(val)
})

function resolveCSS(value) {
  // 正则方法提取匹配的内容
  // 正则的exec方法匹配成功，如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。
  // 此数组的第 0 个元素是与正则表达式相匹配的文本
  const style = regstyle.exec(value)
  /**style[0]--------------
   * <style>
    #content {
      width: 100px;
      height: 100px;
      background-color: aqua;
    }
  </style>
   */

  //提取css并写入在index.css
  const css = style[0].replace("<style>", "").replace("</style>", "")
  fs.writeFile(path.join(__dirname, "./caseFile/index.css"), css, "utf-8", err => {
    if (err) {
      console.log('fail' + err);
    }
    console.log('success css');
  })



}

function resolveScript(value) {
  // 提取script并写入
  const script = regscript.exec(value)
  const js = script[0].replace("<script>", "").replace("</script>", "")
  fs.writeFile(path.join(__dirname, "./caseFile/newindex.js"), js, "utf8", err => {
    if (err) {
      console.log('fail' + err);
    }
    console.log('success script');
  })
}

// 处理html
function resolveHtml(value) {
  // css样式更改为外部引入
  const newHTml = value.replace(regstyle, "<link rel='StyleSheet' href='./index.css'></link >").replace(regscript, "<script src='./newindex.js'></script>")
  fs.writeFile(path.join(__dirname, "./caseFile/newindex.html"), newHTml, "utf8", err => {
    if (err) return console.log('fail');
    console.log('success html');
  })
}

