$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&id=524901&APPID=710a8a155ade8daf23d7240bf1ca4d6f&units=metric",
function(api){
    console.log(api);
    console.log("Local temp :"+api.main.temp);
    console.log(api.weather[0].description);
    $('.temp').html('Local temp: '+api.main.temp);
    $('.icon img').attr('src', 'https://openweathermap.org/img/wn/'+api.weather[0].icon +'.png');
    $('.temp').html('wind speed: '+api.wind.speed);
    $('.icon img').attr('src', 'https://openweathermap.org/img/wn/'+api.weather[0].icon +'.png');
});