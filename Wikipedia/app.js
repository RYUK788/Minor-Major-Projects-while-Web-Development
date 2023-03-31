const express=require('express');
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

const articleSchema=new mongoose.Schema({
    title:"String",
    content:"String"
});
const Article=mongoose.model("Article",articleSchema);

app.get("/articles",function(req,res){
    Article.find({}).then(function(articles){
        res.send(articles);
    }).catch(function(err){
        res.send(err);
    });
});
app.post("/articles",function(req,res){
const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
});
newArticle.save();
});

app.listen(3000,function(){
    console.log("Server running on port 3000");
});