const http = require('http');

http.createServer((req,res)=>{
    
    let response = '';

    if(req.url == '/'){
        response = "Home Page"
    }
    if(req.url == '/about'){
        response = "About Page"
    }
    res.setHeader('Content-Type','text/html');
    res.write(response);
    res.end();

}).listen(8000);

