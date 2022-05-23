// 引入fs模块
const fs = require('fs')
fs.readFile('../../static/person.txt','utf-8',(err,dataStr)=>{
    if(err){
        // err为null或者Object
        return console.log('err:',err.message)
    }
    // dataStr为undefined或者string
    console.log('dataStr:',dataStr) 
})
