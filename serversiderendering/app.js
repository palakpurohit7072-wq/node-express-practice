// import express from "express"
// const app = express ();
// const PORT = 3000;
// const name = "palaks"
// app.set("view engine", "ejs");
// app.get("/", (req,res)=>{
//     res.render("home",{
//         name 
//     });
// })
// app.listen(PORT,()=>{
//     console.log("server listening on port 3000");
// }) 
// for sinde dynamic data 


// for multiple data
// import express from "express"
// const app = express ();
// const PORT = 3000;

// app.set("view engine", "ejs");
// app.get("/", (req,res)=>{
//     res.render("home",{
//         name : "palak",
//         sirname: "purohit"
//     });
// })
// app.listen(PORT,()=>{
//     console.log("server listening on port 3000");
// }) 


// for array data
import express from "express"
const app = express ();
const PORT = 3000;
const users = [
"palak",
"prachi",
"parag"
]
app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("home",{
      users
    });
})
app.listen(PORT,()=>{
    console.log("server listening on port 3000");
}) 
