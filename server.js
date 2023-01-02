var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var path=require("path");

app.use(bodyparser.urlencoded({extended:false}));

app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.listen(8888);
console.log("Server started at 8888");
