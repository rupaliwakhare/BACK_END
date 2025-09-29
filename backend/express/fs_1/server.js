// import express
import express from "express"
import dotenv from "dotenv"

// load envirenment variable
dotenv.config();

// create app 
const app = express()

// middleware 
app.use(express.json())

// define routes
app.get("/",(req,res)=>{
    res.send("Hello, Welcome to our Server")
        
})
app.get("/home",(req,res)=>{
    res.send("<h2>Hello, Welcome to our home page</h2>")
        
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hello, Welcome to our about page</h1>")
        
})

// console.log(process.env.APP_NAME);


app.post("/user",(req,res)=>{
    const {name,email} = req.body
    res.send({a:name,b:email})
})

// start server
let port = process.env.PORT;
console.log(port);

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
   
})