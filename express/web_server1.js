//middleware... process happening inbtw req and res cycle 
//buildin ,custom, thirdparty
//

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors') //thirdparty middleware
const {logger,logEvents} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorhandling');
const PORT = process.env.PORT || 3500 ;
 
//command should be writen on top so that it will be used from throughtout the program.bcz js work asyc

/*custom middleware*/
//custom middle must have next
app.use(logger);

/*thirdparty middleware*/
//app.use(cors());
//cross origin resource shaing enabled 
//now anyone can access our server/api. if your api is opensource then no issue if not it is not protected. so we can restrict our api 
const whitelist = ['https://www.google.co.in','https://www.youtube.com','http://localhost:3500','http://127.0.0.1:5500'];

//console.log(`${whitelist.indexOf(origin)}\t ${!origin}`);
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
app.use(cors(corsOption));
// bring user data from client to backend
/*buildin middleware*/
app.use(express.urlencoded({extended:false}));//eg from form page
app.use(express.json());
//static file - access are given to frontend. before req
app.use(express.static(path.join(__dirname,'./public')))

 
app.get('^/$|index(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
}) 

app.get('^/$|new-page(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'));
})

app.get('/old-page(.html)?',(req, res)=>{
     //res.redirect('new-page.html');//express default status code 302.(temp changed)
    res.redirect(301,'new-page.html');//permanent
})

/* 
app.get('/*',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views','404.html'));//express just display 404.html on web but it status code is not changed .check web-console.
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
 */

//all type of error 
app.all('*',(req ,res) => {
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));
    }else if(req.accepts('json')) {
        res.json({"error" : "404 not found"});

    } else {
        res.type('txt').send("404 not found")
    }
})


app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));