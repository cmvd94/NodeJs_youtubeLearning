const {format } = require('date-fns')
const { v4 : id } = require('uuid');//universal unique id

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const logEvent = async(message) => {
    const dataTime = `${format(new Date(),'dd/MM/yyyy\tHH:mm:ss')}`;
    const logData = `${id()}\t:${dataTime}\t - ${message}\n`;
    console.log(logData);
    
    try{
        if(!fs.existsSync(path.join(__dirname,'logs')))
            {
            await fsPromise.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromise.appendFile(path.join(__dirname,'logs','eventFile.txt'),logData);
    }catch(err){
        console.error(`inside catch- ${err}`);
    }
   console.log("inside logEvent");
}

module.exports = logEvent;

