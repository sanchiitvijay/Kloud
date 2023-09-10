const express=require("express");
const https=require("https");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    
    const query=req.body.cityName;
    const apikey="bd3a705538528bc88ea3ae69b3a365a9";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const temp =weatherData.main.temp
            const weatherDesc=weatherData.weather[0].description
            const icon=weatherData.weather[0].icon
            const iconurl=" https://openweathermap.org/img/wn/"+icon+"@2x.png"
    
            res.write("<p>The weather is currently "+ weatherDesc+"</p>");
            res.write("<h1>The temperature in "+ query+" is "+ temp +" degree celcius.<h1>");
            res.write("<img src='"+iconurl+"' alt='weahter image'>");
            res.send()
        })
    })
})
            
            


app.listen(3000,function(){
    console.log("server is running in port 3000.");
})