// core modules are  built-in module thats come with with 

// fs -used to work with file and folders(write, update,delete)


// create files
// update files
// read files
// delete files 
// rename files
// work with folder


// Synchronous way

const { log } = require("console")
const fs = require("fs")

// // create file 

// fs.writeFileSync("example txt","Hello Back-End")


// Asynchronous way

// const { log } = require("console");
// const fs = require("fs");

// // create file

// fs.writeFile("example txt", "Hello Back-End Async",(err)=>{
//     if (err){
//         console.log(err);
        
//     }
//     console.log("file created");
    
// });


// const data = fs.readFileSync("example.txt","utf-8")
// const data1 = fs.readFile("example.txt","utf-8",(err,data1)=>{
//     if(err) throw err
// })
// console.log(data1);




// update file

// fs.appendFileSync("example.txt","\nNamastey")
// fs.writeFileSync("example.txt","\nThis is Back-End")


// delete
// fs.unlink("file name")

// fs.rename("example.txt","newname.txt",(err)=>{
//     if (err) throw err
//     console.log("file renamed");
    
// })

fs.mkdirSync //create a new folder