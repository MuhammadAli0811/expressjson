// const received = require('./exp.js')

// console.log(received.send)

const datafile = require("./data/data.json");

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


app.get("/user/:id",(req,res) => {
    res.send("hi users"+req.params.id);
})



app.get("/friend",(req,res)=> {
    var info ='';
   datafile.friend.forEach(function(item) {
       info +=`
       <li>
       <h1>${item.Title}</h1>
       <p>${item.Name}</p>
       </li>
       `;
   });
    res.send(`${info}`)
})





app.get("/friend/:id",(req,res)=> {
  var data = datafile.friend[req.params.id];

    res.send(`
                <h3> ${data.Title}  </h3>
                <p> ${data.Name}   </p>
                 `)
})
app.listen(3000,() => console.log("Go at http://localhost:3000") )