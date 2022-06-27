function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEYS.WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const location = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      location.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}도`
    });
}

function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
