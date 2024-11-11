const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500 ;
/* 
app.get('/',(req,res)=>{
    //res.send('hi web server using express');
    res.sendFile(path.join(__dirname,'views','index.html'));
})
 */

//regular expression --------- ^condition$|condition(.extension)?
app.get('^/$|index(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
}) 

app.get('/new-page(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'));
})

app.get('/old-page(.html)?',(req, res)=>{
     //res.redirect('new-page.html');//express default status code 302.(temp changed)
    res.redirect(301,'new-page.html');//permanent
})

// route handling
app.get('/hello(.html)?',(req, res, next) =>{
    console.log('trying to open hello.html');
    next();
}, (req, res) =>{
    res.send('hi! we are in next');
})
/**************************************************/
const one = (req, res, next) => {
    console.log('one');
    next()
}
const two = (req, res, next) => {
    console.log('two');
    //next()
}
const three = (req, res, next) => {
    console.log('three');
    res.send('finished');
}

app.get('/chain(.html)?',[one, three]);

app.get('/*',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views','404.html'));//express just display 404.html on web but it status code is not changed .check web-console.
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));