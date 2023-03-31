const express = require("express");
const app=express();

app.get("/", function(req,res){
    res.send("<h1>hello</h1");
});
app.get("/contact",function(req,res){
    res.send("hello@gmail.com");
});
app.get("/about",function(req,res){
    res.send("<p>Hello this is me ryuk .I am a beginner in javascript and node js hopefully I'll learn everything provided in this course");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});