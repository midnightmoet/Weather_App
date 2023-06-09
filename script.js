const apikey = "46f80a02ecae410460d59960ded6e1c6";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
//const stateInputEl = document.getElementById("state-input");
//const countryInputEl = document.getElementById("country-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInputEl.value;
  // const stateValue = stateInputEl.value;
  // const countryValue = countryInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=imperial`
    );

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°F`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${Math.round(data.wind.speed)} mph`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°F`;
    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "Please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}