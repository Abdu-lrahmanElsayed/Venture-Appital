fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        getAllCountries(countries);
    });

function getAllCountries(countries) {
    let options = '';
    for (const c of countries) {
        options += `<option value="${c.cca2}">${c.name.common}</option>`;
    }
    document.getElementById('country').innerHTML = options;
}

function getSelectedCountry() {
    const selectElement = document.getElementById('country');
    const selectedCountry = selectElement.value;
    if (selectedCountry != "") {
        fetch(`http://api.geonames.org/searchJSON?country=${selectedCountry}&featureClass=P&maxRows=100&username=abdu5`)
            .then(response => response.json())
            .then(data => {
                let cityNames = new Set();
                data.geonames.forEach(place => {
                    cityNames.add(place.name);
                });
                enableSelect(cityNames);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}

function enableSelect(cityNames) {
    let options = '';
    for (const city of cityNames) {
        options += `<option value="${city}">${city}</option>`;
    }
    document.getElementById('city').disabled = false;
    document.getElementById('city').innerHTML = options;
}

function getSelectedCity() {
    const selectElement = document.getElementById('city');
    const selectedCity = selectElement.value;
    if (selectedCity != "") {
        getWeatherByCity(selectedCity);
    }
}

const apiKey = '1184208586914239a60123445251202'

async function getWeatherByCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    returnWeather(data)
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
      getWeatherByCoordinates(position);
    }

async function getWeatherByCoordinates(position) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${position.coords.latitude},${position.coords.longitude}`);
    const data = await response.json();
    returnWeather(data)
}

function returnWeather(data) {
    document.getElementById('Weather').innerHTML = 
    `<h2>${data.location.name}, ${data.location.country}</h2>
    <p>${data.location.localtime}</p>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    <h3>Temperature: ${data.current.temp_c}°C</h3>
    <p>${data.current.condition.text}</p>
    <p>Wind Speed: ${data.current.wind_kph} km/h</p>`;
}