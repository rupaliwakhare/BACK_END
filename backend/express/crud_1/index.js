// import server
import express from "express";
import dotenv from "dotenv";
import fs from "fs"

dotenv.config();

// create app
const app = express();

app.use(express.json());


// get 
const getData = ()=>{
    const data = fs.readFileSync("db.json","utf-8")
    return JSON.parse(data);
}

const writefile = (data)=>{
    fs.writeFileSync("db.json",JSON.stringify(data));
    
    
}

// create rautes
app.get("/",(req,res)=>{
    let data = getData();
    res.send(data.phones)
});

app.post("/post",(req,res)=>{
    let data = getData()
    let {title, price} = req.body

    let phone_obj = {id:Date.now(),title,price}

    data.phones.push(phone_obj)
    writefile(data)
    res.send(data)
})

// update 
app.put("/update/:id",(req,res)=>{
    let data = getData();
    const {id} = req.params;
    const{title,price} = req.body;
    const phone_index = data.phones.findIndex((el)=>el.id == id);
    data.phones[phone_index] ={
        ...data.phones[phone_index],
        title,
        price,
    };
    writefile(data)
    res.send(data)
})
// start server
const PORT = process.env.PORT || 2808;
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

