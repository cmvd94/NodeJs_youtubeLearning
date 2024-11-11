//const fs = require('fs')// thn fs.readFile
import { readFile } from 'node:fs';
//readFile('./files/test.txt', (err, data) => {
  readFile('./files/test.tt','utf8', (err, data) => {//utf8 convert buffer to string
  if (err) throw err;
  console.log(data);//raw buffer data
  //console.log(data.toString());
}); 

//console.log(read.err);
console.log("......works asycn....")

//process inside node. //exit on error
const ret = process.on('uncaughtException', err => {
  console.error(`////inside process: ${err}`)
 process.exit(500);
})

console.log(ret);