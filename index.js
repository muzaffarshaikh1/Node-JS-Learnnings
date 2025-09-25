const http = require('http');

const citiesData = require('./citiesData');

http.createServer((req,res)=>{
    
    let response = '';

    if(req.url == '/'){
        res.setHeader('Content-Type','text/json');
        res.write(JSON.stringify(citiesData));
        res.end();
    }

}).listen(8000);

