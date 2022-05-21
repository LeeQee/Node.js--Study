const fs = require("fs");
fs.writeFile('../../static/student.txt','小山重叠金明灭',function(err,val){
    console.log('err:',err)
    console.log('val:',val)


})