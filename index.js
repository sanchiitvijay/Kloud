import express from "express"
import https from 'https'
import bodyParser from "body-parser";

const port=3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.post("/show", function(req,res){
    
    let query=req.body.cityName;
    const apikey="bd3a705538528bc88ea3ae69b3a365a9";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
        const weatherData=JSON.parse(data)
        console.log(weatherData);
            const temp =weatherData.main.temp
            const humidity=weatherData.main.humidity
            const windSpeed=weatherData.wind.speed
            const feelsLike=weatherData.main.feels_like
            let weatherDesc=weatherData.weather[0].description
            const icon=weatherData.weather[0].icon
            const iconurl=" https://openweathermap.org/img/wn/"+icon+"@2x.png"


            console.log(`${weatherData}\n${temp}\n${weatherDesc}`);

            query = query[0].toUpperCase() + query.slice(1);
            weatherDesc = weatherDesc[0].toUpperCase() + weatherDesc.slice(1);
            
            res.render('weather.ejs',{
                "temp" : temp,
                "weatherDesc" : weatherDesc,
                "iconurl" : iconurl,
                "query" : query,
                "humidity" : humidity,
                "feelLike" : feelsLike,
                "windSpeed" : windSpeed,
            })
        })
    })
});




app.listen(port,function(){
    console.log(`Server is listening on port ${port}`);
})