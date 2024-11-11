//const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'files','test.txt'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);
});
console.log("asycn");
process.on('uncaughtException',err => {
    console.error(`PROCESS.ON: ${err}`)
    process.exit(1);
});

fs.writeFile(path.join(__dirname,'files','write.txt'),'sssssooooollllllluuuuuuuuuuuu',(err) =>{
    if(err) throw err;
    console.log("write cmplt");
    fs.appendFile(path.join(__dirname,'files','write.txt'),'\n\nyebba',(err) =>{
        if(err) throw err;
        console.log("append cmplt")
        fs.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','rename.txt'),(err) =>{
            if(err) throw err;
            console.log("rename cmplt")
        });
    });
});

