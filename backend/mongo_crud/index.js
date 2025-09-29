// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose"

// dotenv.config()

// const app = express()

// const PORT = process.env.PORT || 2000;

// // connect to db
// const connectDB = async()=>{
//     try {
//        await mongoose.connect(process.env.Mongo_url)
//        console.log("Db connected");
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// connectDB()

// app.get("/",(req,res)=>{
//     res.send("welcome to our server")
// })

// app.listen(PORT,()=>{
// console.log(`Server is running at http://localhost:${PORT}`);

// })


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 2000;

// connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

const itemSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  quantity:{
    type:Number,
    default:0
  }, 
},{timestamps:true})




const Item = mongoose.model("Item",itemSchema)
// console.log(Item);



connectDB();

app.get("/", (req, res) => {
  res.send("welcome to our server");
});


app.post("/",async(req,res)=>{
  const item = new Item(req.body);
  await item.save()
  res.send({Massage:"Item created",item})
  

  
  
  
})
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
