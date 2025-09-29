
const fs = require("fs")

// create file

fs.writeFileSync("notes.txt","hello FS module")


// append text

fs.appendFileSync("notes.txt","\n Adding more notes ")

// read file

fs.readFile("notes.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
    
})


// rename file

fs.renameSync("notes.txt","myNotes.txt")

// delete

fs.unlink("myNotes.txt")