

const fs = require("fs")  // ye predefined module he node js ka fs

const result = fs.writeFileSync("test.txt", "Hello")   //   writeFileSync FUNCTION HE 

 console.log(result);

// fs.writeFile("test.js", "hello", (err)=>{});

//  fs.readFileSync("./contact.js", "utf-8");
// fs.readFile("./contact.js", "utf-8", (err,result)=>{
//     if (err){
//         console.log(err);        
//     }
//     else{
//         console.log(result);
//     }
// });
fs.cpSync("./test.js", "./copy.js");