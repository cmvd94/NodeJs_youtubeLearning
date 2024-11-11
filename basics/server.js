const http = require('http');
const PORT = 3000;
const fs = require('fs');

const server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html',(err,data) => {
        if(err){
            response.writeHead(404);
            response.write('page not found');
        }else{
            response.write(data);
        }
        response.end();
    });

});

server.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('server is running on ' + PORT);
    }
});