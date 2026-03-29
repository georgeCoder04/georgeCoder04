
const input = document.querySelector('input');
const button = document.getElementById('primary-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');


button.addEventListener('click', async () => {
    const city = input.value.trim();

    if (!city) return;


    // Step 1: city → coordinates
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    const geoData = await geoRes.json();

    if (!geoData.results) {
        cityName.textContent = 'Provide a Valid City Name';
        temperature.textContent = '';
        description.textContent = '';
        return;
    }

    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;
    const name = geoData.results[0].name;

    // Step 2: coordinates → weather
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current.temperature_2m;
    const wind = weatherData.current.wind_speed_10m;
    const humidity = weatherData.current.relative_humidity_2m;

    // Step 3: Display in DOM
    cityName.textContent = `City: ${name}`;
    temperature.textContent = `Temperature: ${temp}°C`;
    description.textContent = `Wind: ${wind} m/s | Humidity: ${humidity}%`;





});

// alert for empty input
button.addEventListener("click", () => {
    if (input.value === "") {
        window.alert("Please enter a city name");
        return;
    }
});

