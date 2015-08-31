var fs = require('fs');

//perpare obj
var obj = {
  name: 'Fred',
  friends: [
    'Chuck',
    'Wesley',
    'Rance',
    'test',
  ]
}

//write json
fs.writeFile('./save.json',JSON.stringify(obj),function (err) {
  // body...
  if(err)
    throw err;
  console.log('saved');
})
