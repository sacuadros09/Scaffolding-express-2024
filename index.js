const express = require("express")
const app = express()

app.get("/",(req,res) =>{
    res.send("puppy soltero")
})


app.get("/narco",(req,res) =>{
    res.send("POLO")
})

app.get("/test", (req,res) =>{res.send("1 2 3 probando")})



app.listen(3000,() =>{
    console.log("server is running on port 3000")
})