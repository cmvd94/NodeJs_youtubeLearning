
const whitelist = ['https://www.google.co.in','https://www.youtube.com','http://localhost:3500','http://127.0.0.1:5500'];

const corsOption = {
    origin: (origin, callback) => {
        logEvents(`${whitelist.indexOf(origin)}\t${origin}\t${!origin}`,'corsSecurity.txt');
        
        if(whitelist.indexOf(origin) != -1 || !origin) {
            
            callback(null, true)
        }else{
            
            callback(new Error('not allowed by cors'));
        }
    },
    optionSuccessStatus: 200
}