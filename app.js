const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send(" in side / route")
})
app.get("/about",(req,res)=>{
    res.send("in side / route")
})
app.get("*",(req,res)=>{
    res.send("kuch bhi daloo yahi mikegaaa ")
})

// middleware ==> 
        // every fun which have req,res,next in a perameter

        // jab bhi app browser se koi req backens pr bejhte h to bo apne route pr jati h agar app us req ko pahuchne se pahle kuch 
        // check karna chahte h ya fir kuch jodna chahte h to middle ware use karte h 
app.listen(3000);