//City Search
let citySearch = document.querySelector("#form");

//Country details
let countryName = document.querySelector(".country_name");

let countryDate = document.querySelector(".country_date");

let weatherForcast = document.querySelector(".weather_forecast");

let weatherIcon = document.querySelector(".weather_icon");

let weatherTemp = document.querySelector(".weather_tamp");

let weatherMin = document.querySelector(".w-min");

let weatherMax = document.querySelector(".w-max");


//All tamparature
let feelTemp = document.querySelector(".feel_temp");
let humidityTemp = document.querySelector(".humidity_temp");
let windTemp = document.querySelector(".wind_temp");
let pressureTemp = document.querySelector(".pressure_temp");

//To get actual country name by useing JavaScript Demo: Intl.DisplayNames

const getCountryName = (data) => {
  return new Intl.DisplayNames([data], { type: "region" }).of(data);
};

//To get actual country data by useing JavaScript Demo: Intl.DateTimeFormat

const getCountryDate = (data) => {
  const currentDate = new Date(data * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(currentDate);
};

let city = "Dhaka";

//search any city
citySearch.addEventListener("submit", (event) => {
  event.preventDefault();

  const cityName = document.querySelector(".input");
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
});

const getWeatherData = async () => {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80755b2022d719749e17bf548af6c9e4&units=metric`;

  try {
    const response = await fetch(weatherApi);
    const data = await response.json();
    const { dt, main, name, sys, weather, wind } = data;

    countryName.innerHTML = `${name},${getCountryName(sys.country)}`;

    countryDate.innerHTML = `${getCountryDate(dt)}`;

    weatherForcast.innerHTML = weather[0].main;

    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}.png">`;

    weatherTemp.innerHTML = Math.round(main.temp) + "&deg";

    weatherMin.innerHTML = `Min : ${main.temp_min.toFixed()}&deg`;

    weatherMax.innerHTML = `Max : ${main.temp_max.toFixed()}&deg`;

    feelTemp.innerHTML = `${main.feels_like.toFixed(2)}&deg`;

    humidityTemp.innerHTML = `${main.humidity}%`;

    windTemp.innerHTML = `${wind.speed} m/s`;

    pressureTemp.innerHTML = `${main.pressure} hPa`;
  } catch (error) {
    console.log(error);
  }
};

document.body.addEventListener("load", getWeatherData());
