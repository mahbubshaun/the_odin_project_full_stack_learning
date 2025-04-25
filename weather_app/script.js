// app.js
// Configuration
const API_KEY = '826W957UVU2F7AEZJU27E7SFR'; // Replace with your Visual Crossing API key
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// State Management
let currentUnit = 'metric';
let currentWeatherData = null;

// DOM Elements
const elements = {
    form: document.getElementById('searchForm'),
    locationInput: document.getElementById('locationInput'),
    weatherContainer: document.getElementById('weatherContainer'),
    toggleUnit: document.getElementById('toggleUnit'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    errorMessage: document.getElementById('errorMessage')
};

/**
 * Fetches weather data from Visual Crossing API
 * @param {string} location - Location to search for
 * @returns {Promise<Object>} Weather data
 */
async function fetchWeatherData(location) {
    try {
        const response = await fetch(
            `${BASE_URL}${encodeURIComponent(location)}?unitGroup=us&key=${API_KEY}&contentType=json`
        );
        
        if (!response.ok) throw new Error('Location not found');
        
        const data = await response.json();
        return processWeatherData(data);
    } catch (error) {
        showError(error.message);
        return null;
    }
}

/**
 * Processes raw API data into simplified format
 * @param {Object} data - Raw API response
 * @returns {Object} Processed weather data
 */
function processWeatherData(data) {
    const current = data.currentConditions;
    return {
        temp: current.temp,
        feelsLike: current.feelslike,
        humidity: current.humidity,
        windSpeed: current.windspeed,
        conditions: current.conditions,
        icon: current.icon,
        address: data.resolvedAddress
    };
}

/**
 * Updates UI with weather information
 * @param {Object} data - Processed weather data
 */
function updateWeatherDisplay(data) {
    elements.weatherContainer.innerHTML = `
        <div class="weather-card">
            <h2>${data.address}</h2>
            <div class="weather-main">
                <p class="temperature">Temperature: 
                    ${convertTemp(data.temp)}°${currentUnit === 'metric' ? 'C' : 'F'}
                </p>
                <p>Feels like: ${convertTemp(data.feelsLike)}°</p>
                <p>Conditions: ${data.conditions}</p>
                <p>Humidity: ${data.humidity}%</p>
                <p>Wind Speed: ${convertWindSpeed(data.windSpeed)}</p>
            </div>
        </div>
    `;
}

/**
 * Converts temperature based on current unit
 */
function convertTemp(temp) {
    return currentUnit === 'metric' ? 
        Math.round((temp - 32) * 5/9) : 
        Math.round(temp);
}

/**
 * Converts wind speed based on current unit
 */
function convertWindSpeed(speed) {
    return currentUnit === 'metric' ?
        `${Math.round(speed * 1.60934)} km/h` :
        `${Math.round(speed)} mph`;
}

/**
 * Toggles temperature unit and updates display
 */
function toggleTemperatureUnit() {
    currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric';
    if (currentWeatherData) {
        updateWeatherDisplay(currentWeatherData);
    }
}

/**
 * Shows error message
 */
function showError(message) {
    elements.errorMessage.textContent = `Error: ${message}`;
    elements.errorMessage.style.display = 'block';
    setTimeout(() => {
        elements.errorMessage.style.display = 'none';
    }, 5000);
}

// Event Listeners
elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = elements.locationInput.value.trim();
    
    if (!location) return;
    
    elements.loadingSpinner.style.display = 'block';
    elements.weatherContainer.innerHTML = '';
    
    try {
        const weatherData = await fetchWeatherData(location);
        if (weatherData) {
            currentWeatherData = weatherData;
            updateWeatherDisplay(weatherData);
            console.log(weatherData);
            await updateBackground(weatherData.conditions); // Add await here
        }
    } finally {
        elements.loadingSpinner.style.display = 'none';
    }
});

elements.toggleUnit.addEventListener('click', toggleTemperatureUnit);


/**
 * Updates background based on weather conditions using GIFs
 */
async function updateBackground(conditions) {
    const weatherGifs = {
        'clear': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVvODNzZHh4ZHlxMGlhOTR3ODhodmkyN3I0a3pzZDIwZmZteHppciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Styincf6K2tvfjb5Q/giphy.gif',
        'sunny': 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTVwMGxoeDh6ODZ3MHV2cmIzcXlkbjdnNm1kN2xyNHV0aXN0bGZ6NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsbqZrg2LDKaThA68b/giphy.gif',
        'clouds': 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemhpcnEzOGhudXlqaW4zMm9xbGVwd29kMTBvdXMzMmplazd4czhiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zrqT3kn77BlKv4mrHm/giphy.gif',
        'overcast': 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemhpcnEzOGhudXlqaW4zMm9xbGVwd29kMTBvdXMzMmplazd4czhiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zrqT3kn77BlKv4mrHm/giphy.gif',
        'partially cloudy': 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm14ODF0MTN2emZ6MjY2NWIxdnF2a2trdTR5emxqZHFweWE5eWR3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQ7kognlRPDzi/giphy.gif',
        'rain': 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2x2OTJqbHk0NGhrM2ZpZnY3eWwxMnB4bW9mejd6ZHB2YmptMnQxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t7Qb8655Z1VfBGr5XB/giphy.gif',
        'snow': 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3htaW9uMGd4MWRpOG95ZmQ3cHY0Y29qbjZsaTZicnIxeXdrNm9neiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BDucPOizdZ5AI/giphy.gif',
        'thunderstorm': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHE2dnNtNWp5MnBybWhjM3drN2xwaXdweW16aWlzbzNwOWhmeWVibSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjHB1EKuujDjYFWw/giphy.gif',
        'fog': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHhkNWlpYWg1Zjh4aHJqZDJ5MzlzemN1bTFwdmZkdXd5dmhlcjJxeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2Je9dUI5LpzfHGTe/giphy.gif'
    };

    const normalizedCondition = conditions.toLowerCase().split(',')[0].trim();
    console.log('Normalized Condition:', normalizedCondition); // Debugging line
    console.log('GIF URL:', weatherGifs[normalizedCondition]); // Debugging line
    const gifUrl = weatherGifs[normalizedCondition] || weatherGifs['clear'];

    // Create or update background element
    let bgElement = document.getElementById('weather-bg');
    if (!bgElement) {
        bgElement = document.createElement('div');
        bgElement.id = 'weather-bg';
        document.body.insertBefore(bgElement, document.body.firstChild);
    }

    // Set background image directly
    bgElement.style.backgroundImage = `url('${gifUrl}')`;
}