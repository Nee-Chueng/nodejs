// 通过require引入的模块，始终以module.export指向对象为结果
// 例子

// 现有一个模块一
const name = "zn"
module.export.name
exports.age = 20

//结果： require引入的模块一的内容只有{name}属性


// 建议：防止冲突，尽量使用同一个方式