
import express from "express"
import fs from "fs";
import users from "./MOCK_DATA.json" with { type: "json" };
const Port = 3000;
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
})
app.get("/api/users",(req,res)=>{
    res.json(users);
})
app.get("/api/users/:id",(req,res)=>{
    const urlid = Number(req.params.id);
    const user = users.find((user)=> user.id === urlid)
    res.send(user);
})
app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
            res.json({status:"success", id: users.length})
    })
})

app.listen(Port, ()=>{
    console.log("server is running on port 3000");
})


