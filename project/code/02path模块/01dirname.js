// 引入path模块
const path = require('path')
const fs = require('fs')
// 获取当前文件所在的目录
const dirname = __dirname;
/**
 * 1.path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
 * 2.path.basename(url[,后缀名])方法，用来从路径字符串种，将文件名解析出来
 * 3.path.extname获取路径中的文件扩展名
 */
const pathStr = path.join(__dirname,'../../','static/person.txt')
fs.readFile(pathStr,'utf-8',function(err,dataStr){
    if(err){
        return console.log(err.message)
    }
    console.log(dataStr)
})
// 第二个参数可以过滤掉文件后缀名输出，输出person
const filename = path.basename(pathStr,'.txt')
console.log("filename:::",filename)
// path.extname获取路径中的文件扩展名,输入.txt
const extname = path.extname(pathStr);
console.log("extname:::",extname)