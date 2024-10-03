const http = require('http');
var server = http.createServer((req,res)=>{
    res.end("Hellooooooooooooooooooooo")
})
server.listen(3000);