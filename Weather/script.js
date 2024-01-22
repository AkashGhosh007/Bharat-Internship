function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;

    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = '5484626b97503cd76535ee553de2655d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
                return;
            }

            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherText = `Current Temperature: ${temperature}°C, Description: ${description}`;
            weatherInfo.textContent = weatherText;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data. Please try again.');
        });
}
