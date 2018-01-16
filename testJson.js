var fs = require('fs');
var json = fs.readFileSync('package.json');

console.log(JSON.parse(json).repository.url);


// fs.readFileSync('package.json')
// 
// 
// 