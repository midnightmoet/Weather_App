const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");
const stateInputEl = document.getElementById("state-input");

const formEl = document.querySelector("form");


formEl.addEventListener("submit", (e) =>{
    e.preventDefault();
    const city = cityInputEl.value;
    const state = stateInputEl.value;
    getWeatherData(city, state);

    // console.log(city, state);
})

function getWeatherData(city){
    
}