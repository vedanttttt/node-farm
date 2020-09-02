const fs = require('fs');

//Blocking synchronous way
//reading file
const textin = fs.readFileSync(__dirname + '/txt/input.txt','utf8');
console.log(textin);

//writing file to output.txt which doesnt exists previously
const textout = `this is what we know about the avocado: ${textin}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textout);
console.log('File written');

//Nodejs is all built around callbacks inorder to implement asynchronous behaviour
//Non blocking asynchronous way
// fs.readFile("./txt/start.txt","utf8",(err,data)=>{
//     console.log(data);
// });
// console.log('reading file...');

fs.readFile('./txt/start.txt','utf8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf8',(err,data2)=>{
        console.log(data2);
    });
});
console.log('Reading file...');