//api - apllication programming interface
//cilent -(req,res)- api - server
//swiggy use google map api
//api in general it just interface
//api can define client (ie get or post ) 
//REST API . database operation crud- create(post) read(get) update(put) delete(delete)
//REST API has URL endpoint, HTTP verb, Body Messagezz


const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOption = require('./config/corsoption');
const {logger,logEvents} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorhandling');
const PORT = process.env.PORT || 3500 ;
 

app.use(logger);

app.use(cors(corsOption));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',express.static(path.join(__dirname,'./public')));
app.use('/subdir',express.static(path.join(__dirname,'./public')));


app.use('/',require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));
app.use('/employees',require('./routes/employees'));

 
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