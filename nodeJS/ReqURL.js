const http = require('http');
var server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Hellooooooooooooooooooooo")
})
server.listen(3000);