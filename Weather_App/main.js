//everythin for the weather app
let Search = document.querySelector("#input");

let button = document.querySelector("#search_btn");

let weatherIcon = document.querySelector("#weather_icon");

let cityTemp = document.querySelector(".city_temp");

let cityName = document.querySelector(".city_name");

let humidityTemp = document.querySelector(".humidity_temp");

let windTemp = document.querySelector(".wind_temp");

//full container get
let weatherContainer = document.querySelector('.fullWeatherSection');

//error messege
let error = document.querySelector(`.error`);



//api key and url
const apiKey = "80755b2022d719749e17bf548af6c9e4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//country name
const countryName = (data) => {
  return new Intl.DisplayNames([data], { type: "region" }).of(data);
};

const weatherApp = async (city) => {
  const data = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(data.status == 404){

error.style.display ="block";
weatherContainer.style.display='none';

  }else{

    const response = await data.json();

    console.log(response);
  
    const { main, name, sys, weather, wind } = response;
  
    cityTemp.innerHTML = `${Math.round(main.temp)}&#8451;`;

    cityName.innerHTML = `${name}, ${countryName(sys.country)}`;
  
    humidityTemp.innerHTML = `${main.humidity}%`;

    windTemp.innerHTML = `${wind.speed} km/h`;
  
    if (weather[0].main == "Clouds") {
  weatherIcon.src= `images/clouds.jpg`;
  } else if (weather[0].main == "Clear") {
  weatherIcon.src= `images/clear.jpg`;
  } else if (weather[0].main == "Rain") {
  weatherIcon.src= `images/rain.jpg`;
  } else if (weather[0].main == "Drizzle") {
  weatherIcon.src= `images/drizzle.jpg`;
  } else if (weather[0].main =="Mist") {
  weatherIcon.src= `images/mist.jpg`;
  } else if (weather[0].main =="Snow") {
  weatherIcon.src= `images/snow.jpg`;
  }else if(weather[0].main == "Haze"){
    weatherIcon.src= `images/haze.png`;
    }
  
    weatherContainer.style.display='block';
    error.style.display = 'none';

  }
 
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  weatherApp(Search.value);
  Search.value = "";
});





  
