// Crypto module 
// Crypto module provides a way to perform cryptographic operation


// Hasting
// Encryption & Decription
// generating random values(tokens, password,otp)
 
const crypto = require("crypto")
const password = "Mypassword@49"
const hashpass = crypto.createHash("sha256",).update(password).digest("hex")

// console.log("original password- ",password);
// console.log("hash pass- ",hashpass);

const tokens = crypto.randomBytes(8).toString("hex")
console.log(tokens);
