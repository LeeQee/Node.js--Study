// 引入fs模块
const fs = require('fs')
// 引入path模块
const path = require("path")

// 读取html文件
const htmlPath = path.join(__dirname,'./','index.html')
fs.readFile(htmlPath,'utf-8',function(err,str){
    if(err){
        return console.log("读取文件失败:::",err.message)
    }
    // 解析js代码
    resolveJs(str)
    // 解析css代码
    resolveCss(str)
    // 解析html代码
    resolveHtml(str)
})


// 解析js代码
function resolveJs(str){
    
}
// 解析css代码
function resolveCss(str){
    
}
// 解析html代码
function resolveHtml(str){
    
}

// 写入文件
function writeFile(path,content){
    fs.writeFile(path,content,function(err){
        if(err){
            return console.log("文件写入失败::",err.message)
        }
    })
}