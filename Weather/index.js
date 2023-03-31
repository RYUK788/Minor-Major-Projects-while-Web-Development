const express=require("express");
const https = require('node:https');
const bodyParser= require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
});

app.post("/",function(req,res){
    var SelectedCity=req.body.cityName;

    const city=SelectedCity;
    const unit="metric";
    const apiKey="065447fa5058a4aab5836be4cefe02e4";
    const url="https://api.openweathermap.org/data/2.5/weather?10d&q="+city+"&units="+unit+"&appid="+apiKey;
    https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
       const weatherData= JSON.parse(data);
       const temp= weatherData.main.temp;
       const weatherCondition=weatherData.weather[0].description;
       const icon=weatherData.weather[0].icon;
       const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
       res.write("<p>The weather Condition is  "+weatherCondition+".");
       res.write("<h1> The weather temprature in "+city+" is "+temp+" degree celsius </h1>");
       res.write("<img src="+imgURL+">");
       res.send();
});

});
 
});




app.listen(3000,function(){
    console.log("Server started at 3000 port");
});