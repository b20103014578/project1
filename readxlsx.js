var fs = require('fs');

fs.readFile('./output.xlsx','utf8',function (err,data) {
  // body...
  if(err)
    console.log("read xlsxfail");
    var obj = XLSX.parse(data);
    console.log(obj);
})
