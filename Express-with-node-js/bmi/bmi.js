const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/",function(req,res){
    var a=(req.body.height);
    var b=(req.body.mass);
    var result= a * b;
    res.send("Your body mass Index is "+result);
});
app.listen(3000, function(){
    console.log("Seever starting at 3000 port ");
});