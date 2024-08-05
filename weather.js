const apiKey = '5853c8db5bb09f2cb6065e22d099b3d0';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const city = document.getElementById("searchbox");
const search = document.getElementById("searchBtn");
const weatherImg = document.getElementById("mausam");

async function checkweather(city) {
    const response = await fetch (apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) +`°C`;
    document.getElementById("humidity-percent").innerHTML = data.main.humidity + `%`;
    document.getElementById("windSpeed").innerHTML= data.wind.speed +`km/h`;

    if(data.weather[0].main == 'Clouds'){
        weatherImg.src = "weatherImages/cloud.png";
    }
    else if(data.weather[0].main == 'Clear') {
        weatherImg.src = "weatherImages/clear (2).png"

    }
    else if(data.weather[0].main == 'drizzle') {
        weatherImg.src = "weatherImages/drizzle.png"

    }
    else if(data.weather[0].main == 'Mist') {
        weatherImg.src = "weatherImages/mist.png"

    }
    else if(data.weather[0].main == 'Rain') {
        weatherImg.src = "weatherImages/rain.png"

    }
    else if(data.weather[0].main == 'Snow') {
        weatherImg.src = "weatherImages/snow.png"

    }

    
}
search.addEventListener('click', ()=>{
    checkweather(city.value);
})

