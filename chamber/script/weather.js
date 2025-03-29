const apiKey = "YOUR_API_KEY";  
const city = "ChamberCity";      

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const weatherContainer = document.getElementById("weather-info");
    
    const currentWeather = data.list[0];
    const currentTemp = Math.round(currentWeather.main.temp);
    const weatherDescription = currentWeather.weather.map(w => w.description).join(", ").toUpperCase();
    
    const forecast = data.list.slice(1, 4).map(day => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        temp: Math.round(day.main.temp),
        description: day.weather.map(w => w.description).join(", ").toUpperCase()
    }));
    
    let forecastHtml = forecast.map(f => `
        <p>${f.date}: ${f.temp}°C, ${f.description}</p>
    `).join("");

    weatherContainer.innerHTML = `
        <p>Current Temperature: ${currentTemp}°C</p>
        <p>Description: ${weatherDescription}</p>
        <h3>3 Day Forecast:</h3>
        ${forecastHtml}
    `;
}

fetchWeather();
