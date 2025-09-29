const crypto = require("crypto")


const algo = "sha256"
const key = crypto.randomBytes(32); //secret kay
const vector = crypto.randomBytes(16);


let massage = "Hello User, this is secreat !"

// encrypt

const x = crypto.createCipheriv(algo,key,vector)
// console.log(x);

const encrypted = x.update(massage,"utf-8")
console.log(encrypted);





