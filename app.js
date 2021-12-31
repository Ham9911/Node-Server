const express=require("express");
const res = require("express/lib/response");
const app= express();
const formRoutes=require("./routes/form");
const bodyParser = require("body-parser");
const path=require("path");

app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,"public")));

app.use((req,res,next)=>{
    console.log(req.url);
    next();
});


app.use("/form",formRoutes)
app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(3000);