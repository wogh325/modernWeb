/*var a = 1;
var b = 2;

function add(x,y) {
    var result = a + b;
    return result
}

var result = add(a,b);

console.log(result);
*/

//파일 읽기 동기식 방식 호출
/*
//1
const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
console.log(data);
console.log('Done');
*/
//2
function myCallback(err, data){
    if (err) return console.log(err);
    console.log(data);
}

const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8', myCallback);

console.log('Done');

//js 특징 : (async)비동기식 호출 
//비동기방식 호출
/*const fs = require('fs');
 
fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);
 
    console.log(data);
})
*/
