// const received = require('./exp.js')

// console.log(received.send)

const express = require("express");
const app = express();
//console.log(app);

app.use(express.static(__dirname + "/public"));

app.get("/",(req,res) => {
   // res.send("Hello World");

   res.sendFile(__dirname + '/index.html')
})

app.get("/user",(req,res) => {
    res.send("hi users");
})

app.post("/user/app",(req,res) => {
    res.send("Rounting data by post method insert")
})

app.listen(3000,() => console.log("Go at http://localhost:3000") )