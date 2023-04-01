const express=require('express');
const mongoose=require("mongoose");
const ejs=require("ejs");
const app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(
    express.json()
);
app.use(
    express.urlencoded({
         extended: false
    })
);
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

const articleSchema=new mongoose.Schema({
    title:"String",
    content:"String"
});
const Article=mongoose.model("Article",articleSchema);


app.route("/articles")
    
    .get(function(req,res){
    Article.find({}).then(function(articles){
        res.send(articles);
    }).catch(function(err){
        res.send(err);
    });
})

    .post(function(req,res){
     const newArticle=new Article({
        title:req.body.title,
        content:req.body.content
    });
    newArticle.save();
    })
    
    .delete(function(req,res){
        Article.deleteMany().then(function(articles){
            res.send(articles);
        }).catch(function(err){
            res.send(err);
        });
    });


    app.route("/articles/:articleTitle")

    .get(function(req,res){
        Article.findOne({title: req.params.articleTitle}).then(function(article){
            res.send(article);
        })
        .catch(function(err){
            res.send(err);
        });
    })
    .put(async function(req,res){
        // Article.updateMany({title:req.params.articleTitle},{title:req.body.title,content:req.body.content})
        // .then(function(){
        //     res.send("article updated successfully");
        // }).catch(function(err){
        //     res.send(err.message);
        // });



       
        try {
              await Article.updateMany({title:req.params.articleTitle},{title:req.body.title,content:req.body.content});
        res.send("article updated successfully");
        } catch (error) {
            res.send(error.message);
        }
    })

    .patch(async function(req,res){
        try {
            await Article.updateMany({title:req.params.articleTitle},{$set:req.body});
            res.send("Successfully updated article");
        } catch (error) {
            res.send(error.message);
        }
    })

    .delete(async function(req,res){
        try {
            await Article.deleteOne({title:req.params.articleTitle});
            res.send("sucessfully  deleted the corresponding article");
        } catch (error) {
            res.send(error.message);
        }
    })

app.listen(3000,function(){
    console.log("Server running on port 3000");
});