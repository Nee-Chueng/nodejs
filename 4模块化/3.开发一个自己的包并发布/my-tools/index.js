// 包的入口文件
function dateFormat(str) {
  const dt = new Date(str)
  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDay())
  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return newDate = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
  return n > 9 ? n : "0" + n
}
module.exports = {
  dateFormat
}