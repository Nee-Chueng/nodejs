//模块在第一次加载的时候会被缓存，多次require不会导致代码被执行多次（模块会优先从缓存中加载，提高效率）

// 内置模块和第三方重复名字了，将以内置为主

// require加载模块的时候，会自动按顺序补全.js .json 的方式去查找

// 如果加载的既不是内置，也没有./开头，将尝试从node_modules中加载

// 加载的时候回去寻找package.json中的main属性，如果没有，尝试从目录下寻找index.js文件，在没有就报错