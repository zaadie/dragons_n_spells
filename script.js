// var city ="Melbourne";
var city = "Los Angeles";

$.getJSON("https://openweathermap.org/data/2.5/weather?q=" + city + "&appid=b6907d289e10d714a6e88b30761fae22", function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
    var temp = Math.floor(data.main.temp);
    var temp_min = Math.floor(data.main.temp_min);
    var temp_max = Math.floor(data.main.temp_max);
    var weather = data.weather[0].main;

    $(".city").append(city);
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".temp_min").append(temp_min);
    $(".temp_max").append(temp_max);
}
);
