const fs = require("fs");
fs.writeFile('../../static/student.txt','小山重叠金明灭',function(err){
    console.log('__dirname',__dirname)
    if(err){
        return console.log('写入文件失败：'+err.message)
    }
})