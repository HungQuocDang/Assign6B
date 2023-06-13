
var data1 = 0;
var data2 = 0;
var data3 = 0;
var cityName = 0;
var temperature1 = 0;
var weather = 0;
var windSpeed = 0;
var humidity = 0;
var temperature2 = 0;
var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
const part0 = "https:";
const part1 = "//api.openweathermap.org/data/2.5/weather?q=";
const part2 = "Ottawa";
const part3 = ",ca&APPID=072c5a4ab04eb390a91ac908259464d0";
var weatherUrl = part0 + part1 + part2 + part3;

var setData1=0;
var setMat1=[];






//http://api.openweathermap.org/geo/1.0/direct?q=Ottawa,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0
//https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=072c5a4ab04eb390a91ac908259464d0

fetch("http://api.openweathermap.org/geo/1.0/direct?q=Ottawa,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0")
  .then(response => response.json()).then(cityNameInfo => {
    console.log(cityNameInfo);
    var lat = cityNameInfo[0].lat
    var lon = cityNameInfo[0].lon

    var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=072c5a4ab04eb390a91ac908259464d0`;
    fetch(url)
      .then(response => response.json()).then(forecastInfo => {
        console.log(forecastInfo);
        console.log(forecastInfo.daily);
        console.log(forecastInfo.daily[0].temp);
        setMat1=forecastInfo;

      });

  })

//-------

console.log("setMat1", setMat1);



var localTime=0;
var today = dayjs();
var currentHour=dayjs().hour();
var todayTime = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, HH:ss'));
todayTime =(today.format('h:mm:ss a'));
console.log("todayTime", todayTime);
todayDate=today.format('MMM D, YYYY, HH:ss');
todayDateNum=today.format('D');
console.log("todayDate", todayDate);
console.log("todayDateNum", todayDateNum);
localStorage.clear();


selectedCities = ["Halifax", temperature1, weather, windSpeed, humidity];
console.log(selectedCities);
var cityName = "New York"; // Replace with the actual city name
selectedCities.push(cityName);
cityName = "Ottawa";
selectedCities.push(cityName);

localStorage.setItem('selectedCities', JSON.stringify(selectedCities));
//localStorage.setItem('selectedCities', selectedCities);

const storedCities = localStorage.getItem('selectedCities');
console.log(storedCities);

//api.openweathermap.org/data/2.5/forecast/daily?q=Ottawa,&cnt=5&appid=072c5a4ab04eb390a91ac908259464d0

console.log(weatherUrl);
//weatherUrl=JSON.parse(weatherUrl);
console.log(weatherUrl);
const thisUrl = "https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&APPID=072c5a4ab04eb390a91ac908259464d0";
var requestUrl = weatherUrl;
//var requestUrl = thisUrl;
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&APPID=072c5a4ab04eb390a91ac908259464d0';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Using console.log to examine the data
    console.log(data);
    data1 = data;

    data2 = JSON.stringify(data1);
    data3 = JSON.parse(data2);

    console.log("data1", data1);
    console.log("data2", data2);
    console.log("data3", data3);





    temperature1 = data1.main.temp;
    weather = data1.weather[0].main;
    windSpeed = data1.wind.speed;
    humidity = data1.main.humidity;
    cityName = data1.name;

    console.log("temperature1", temperature1);
    console.log("weather", weather);
    console.log("windSpeed", windSpeed);
    console.log("humidity", humidity);
    console.log("cityName", cityName);


    /**
     * 
     *cities:  array of objects
     * each object represents a day's weather with properties: cityName, temperature, ....
     * 
     */
    var cities = [];
    var newCity = {
      cityName: cityName,
      temperature: temperature1,
      weather: weather,
      windSpeed: windSpeed,
      humidity: humidity
    }
    cities.push(newCity)

    console.log("cities", cities);
    //selectedCities.push(temperature1);


    //selectedCities[1][1].push(temperature1);
    console.log("storedCities", storedCities);
    console.log("selectedCities", selectedCities);


    
  });



