// const express = require("express");
// const app = express();
// app.use(express.raw());

// app.get("/", (req,res)=>{
//     res.send("This is a home page");
//     })
// app.post("/",(req,res)=>{
//     console.log(req.body.toString());
//     res.send("This is a post request");
// })
// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })

const express = require("express");
const app = express();
app.use(express.text());

app.get("/", (req,res)=>{
    res.send("This is a home page");
    })
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("This is a post request");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

