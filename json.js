var fs = require('fs');

fs.readFile('./example.json','utf8',function (err,data) {
  // body...
  if(err)
    console.log("read fail");
    var obj = JSON.parse(data);
    console.log(obj);
})
