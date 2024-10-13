const express = require('express');
const app = express();

///    routes in postmen 

var data= [2,3,4,5,6]

app.get('/data',(req,res)=>{
    res.send(data)
})

app.post('/data/:number',(req,res)=>{
    console.log(typeof req.params.number);  // req.params.number is a string
    console.log(req.params.number);
    data.push(parseInt(req.params.number))  // so we have to convert it to a number and then push it
    res.send(data)   
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
