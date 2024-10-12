const express = require('express')
const app = express()


// app.get("/",(req,res)=>{
    //     res.send(" in side / route")
    // })
    // app.get("/about",(req,res)=>{
        //     res.send("in side / route")
        // })
        // app.get("*",(req,res)=>{
            //     res.send("kuch bhi daloo yahi mikegaaa ")
            // })
            
            // middleware ==> 
                // every fun which have req,res,next in a perameter
            
            // jab bhi app browser se koi req backens pr bejhte h to bo apne route pr jati h agar app us req ko pahuchne se pahle kuch 
            // check karna chahte h ya fir kuch jodna chahte h to middle ware use karte h 
            
            // Express-Session midilware 
             const expressSession = require('express-session');
             // connect flash middleware
             const flash = require('connect-flash');


             // COOKIE PARSER 

             const cookieParser = require('cookie-parser');




             //   CORS middleware 
             const cors = require('cors');
             
             
             
             //  MORGAN middleware 
             const morgan  = require('morgan');
             
             // express-session middleware
             
             //  app.use(expressSession({
                //     secret: "random stuff",
                //     resave: false,       // for to not save when we did't change in session save
                //     saveUninitialized: false  // when user is not logged in 
                //  }))
                //  app.get('/create',(req,res)=>{
                //     req.session.polo = true;
                //     res.send("done")
                //  })
                //  app.get('/check',(req,res)=>{
                    //     console.log(req.session.polo);
            //  })
            
            
            
            
            
            //    CONNECT FLASH MIDDLEWARE
            
            //  app.use(flash());
            // app.get('/',(req,res)=>{
            //     req.flash('error',"invalid credentials");
            //     res.redirect('/error')
            // })
            // app.get('/error',(req,res)=>{
                //     let massege =req.flash('error')
                //     res.send(massege);
                // })
                
                


                //       CORS  
                
                
                // app.use(cors());   // for all shareble routes

                // app.get('/shareble',cors(),(req,res)=>{         if we want to make only one shareable route
                //     res.send("done")
                // })
                
                
                //       cookie Parser 
                // app.use(cookieParser())
                // app.get('/banned',(req,res)=>{
                    //     res.cookie("banned","True")
                    //     res.send("banned")
            // })
            // app.get('/check',(req,res)=>{
            //     console.log(req.cookies.banned);
            //     res.send("done")
            // })



        //  MORGAN 

            

            // app.use(morgan("dev"))

            // app.get('/',(req,res)=>{
            //     res.send("Hello World")
            // })



        //       EJS 
        
        app.set('view engine', 'ejs')
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))

        app.get('/',(req,res)=>{
            res.render('index')
        })
        app.get('/check',(req,res)=>{
            console.log(req.query);
            res.send(req.query)
        })


        app.listen(3000);