import express from 'express'
const app = express();

app.listen(3000,()=>{
    console.log("listening to port 300");
})

app.get("/",(req,res)=>{
    res.send("working");
})