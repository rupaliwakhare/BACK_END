//  its a core module in nodejs used to create server and handle request & response

const http = require("http")
const fs = require("fs")

const data = fs.readFileSync("db.json", "utf-8")
// console.log(data);
const db = JSON.parse(data)
console.log(db);



const server = http.createServer((req,res)=>{
  res.writeHead(200, { "content-Type": "application/json" });

  // routes

  if(req.url == "/user"){
    res.end(JSON.stringify(db.user))
  }
    // if (req.url == "/"){
    //     res.end("<h1> Welcome to Home page </h1>");
    // }else if(req.url == "/about"){
    //     res.end("welcome to about page")
    // }
  
})



// start the server on port 2802
server.listen(2802,()=>{
    console.log("server is runing on port 2802");
    
})