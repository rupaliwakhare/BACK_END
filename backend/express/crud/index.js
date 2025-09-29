// import express

import express,{json} from "express";
import dotenv from "dotenv"
import fs from "fs"


dotenv.config();

// create server
const app = express();

// middleware to parse data
app.use(express.json())

// Function for read.db.json data
const readDB = ()=>{
    const data = fs.readFileSync("db.json","utf-8")
    // console.log(data);
    return JSON.parse(data)
    
}
// let x = readDB()
// console.log(x.books);

// Update db.json
 const writeDB = (data)=>{
fs.writeFileSync("db.json",JSON.stringify(data))
}

// writeDB({a:1,b:2})

// Routes
app.get("/",(req,res)=>{
    res.send("Welcome to our Books store")
})

// get all books
app.get("/books",(req,res)=>{
    const db = readDB()
    res.send(db)

})

// post and create a book
app.post("/books",(req,res)=>{
    const db = readDB()
    const {title,author}= req.body 

    const newBook = {id:Date.now(),title,author}
    // console.log(newBook);
    db.books.push(newBook)
    writeDB(db)

  res.status(201).json(newBook);
    
});

// update book by the id
app.put("/books/:id",(req,res)=>{
    const db = readDB();
    const {id}= req.params;
     const { title, author } = req.body; 
     const bookIndex = db.books.findIndex((el)=>el.id==id)
     db.books[bookIndex] = {...db.books[bookIndex],title,author}
     writeDB(db)

    res.send(db.books[bookIndex]);
})

// delete book by the id
app.delete("/books/:id", (req, res) => {
    const db = readDB();
    const { id } = req.params;

    const bookIndex = db.books.findIndex((el) => el.id == id);

    if (bookIndex === -1) {
        return res.status(404).send({ message: "Book not found" });
    }

    const deletedBook = db.books.splice(bookIndex, 1)[0];
    writeDB(db);

    res.send({ message: "Book deleted successfully", deletedBook });
});


// start server
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Books Api running on http://localhost:${PORT}`);
    
})