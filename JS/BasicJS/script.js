  ////          Asyncronish JS           /////////







//// call back  promise  Async Await  /////// //

       //   function getSong(){
       //     setTimeout(() => {
       //         console.log("song aa  gye");
       //     }, 2000);
       //   }

       //   function getMoreSong(){
       //     setTimeout(() => {
       //         console.log("more song aa gye");
       //     }, 1200);
       //   }

       //   getSong()
       //   getMoreSong()
         // so this is a problem here we get "more song aa gye" before we get "song aa gye" 
         // so we use call back and pass function inside the parameter
//////////////////////////////////////////////////////////////////////////////////////////////////////
     //   function connectToServer(abcd){
     //     console.log('connecting to server...');
     //     setTimeout(() => {
     //         console.log("conneted to server");
     //         abcd()

     //     }, 2000);

    
     //    }

     //    function fethCourses(cbfn){
     //     console.log("fatching courses...");
     //     setTimeout(() => {
     //        cbfn(["course1", "course2", "course3","course4"]);
     //     }, 2000);
     //    }

     //    connectToServer(()=>{
     //     fethCourses((Data)=>{
     //         console.log(Data);   // this is calls back Hell 
     //     })   
     //    })
//////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////  Promisessss
   
    // function connectToServer(){
    //       console.log("connecting to server...");
    //       return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve("connected");
    //         }, 2000);

    //       })
    // }

    // function fetchCourses(){
    //     return new Promise((resolve,reject)=>{
    //         console.log("Fetching courses...");
    //         setTimeout(() => {
    //             resolve(["course1", "coure2", "course3"]);
    //         }, 2000);

    //     })
    // }
    // connectToServer().then((Response)=>{
    //     console.log(Response);
    //     return fetchCourses()
    // }).then((response)=>{
    //     console.log(response);
    // })


 //////   /////////////////////////////////////////////////////////////////////////////////////////////////////


 ///     Import Export  /////

   var  a = 2;
   // now we want to export this variable
  

