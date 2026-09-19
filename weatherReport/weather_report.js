function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value.trim();
    const apiKey = '0f74f5ac0f1c2b7bee6c521971d732d8'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const weatherInfo = document.getElementById('weatherInfo');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = `<p>Could not fetch weather. Check the city name and try again.</p>`;
        });
}

// Attach the listener OUTSIDE the function
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
