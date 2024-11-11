const fs = require('fs');

const makedir = (name) => {
    
    try {
    if(!fs.existsSync(name)){
        fs.mkdir(name ,(err) => {
            if(err) throw err;
        })
    }
     }catch(err){
        console.log(`inside catch ${err}`)
    }
}

function initmain(){
    if(fs){
        makedir('./love');
    }else{
        console.log("NULL");
    }
}

initmain();



//remove
/* 

const fs = require('fs');

if(fs.existsSync("./name")){
    fs.rmdir("./name",(err) => {
        if(err) throw err;
        console.log("created/Removed");
    });    
}
 process.on('uncaughtException',err => {
    console.error(`inside error process.on ${err}`);
    process.exit(1);
 })
 */