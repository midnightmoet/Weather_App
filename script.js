const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");
const stateInputEl = document.getElementById("state-input");

const formEl = document.querySelector("form");


formEl.addEventListener("submit", (e) =>{
    e.preventDefault();
    const cityValue = cityInputEl.value;
    const stateValue = stateInputEl.value;
    getWeatherData(cityValue, stateValue);

    // console.log(cityValue, stateValue);
})

async function getWeatherData(cityValue, stateValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&${stateValue}&units=imperial`);

        if(!response.ok){
            alert("Weather data not available");
        }

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const humidity = Math.round(data.main.humidity);
        const windSpeed = Math.round(data.wind.speed);
        const weatherDescription = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}°F`,
            `Humidity: ${Math.round(data.main.humidity)}%`,
            `Wind Speed: ${Math.round(data.wind.speed)} mph`
    
        ]

        weatherDataEl.querySelector(
            ".icon"
          ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataEl.querySelector(".temperature").innerHTML = `${temperature}°F`;
        weatherDataEl.querySelector(".description").innerHTML = weatherDescription;
        weatherDataEl.querySelector(".details").innerHTML = details.join("<br>");

        
/**This console log is simply for testing within the console for the data */
        // console.log(data);

    }catch (error) {  
        console.log(error);
    }
}