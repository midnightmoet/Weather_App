const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");
const stateInputEl = document.getElementById("state-input");

const formEl = document.querySelector("form");


formEl.addEventListener("submit", (e) =>{
    e.preventDefault();
    const cityValue = cityInputEl.value;
    const stateValue = stateInputEl.value;
    getWeatherData(cityValue);

    console.log(cityValue, stateValue);
})

async function getWeatherData(cityValue, stateValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&${stateValue}&units=imperial`);

        if(!response.ok){
            throw new Error("Weather data not available");
        }

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const humidity = Math.round(data.main.humidity);
        const windSpeed = Math.round(data.wind.speed);
        const weatherDescription = data.weather[0].description;

        weatherDataEl.innerHTML = `
        <div class="weather-data">
            <h2 class="weather-data__temperature">${temperature}°F</h2>
            <p class="weather-data__description">${weatherDescription}</p>
            <p class="weather-data__humidity">Humidity: ${humidity}%</p>
            <p class="weather-data__wind-speed">Wind Speed: ${windSpeed} mph</p>
        </div>
        `;
/**This console log is simply for testing within the console for the data */
        // console.log(data);

    }catch (error) {  
        console.log(error);
    }
}