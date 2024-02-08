

const apiKey = "bf991ac8a150545c68eaa3bfbd075ca0";
const theUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

let searchBox = document.querySelector('input');
let searchBtn = document.querySelector('button');
let sky = document.getElementById('sky');

async function checkWeather(city) {

    const response = await fetch(theUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
   
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('wind').innerHTML = Math.round(data.wind.speed) + " km/h";

    if(data.weather[0].main == 'Clouds') {
        sky.classList.add('fa-solid', 'fa-cloud')
    }
    else if(data.weather[0].main == 'Clear') {
        sky.classList.add('fa-solid', 'fa-rainbow')
    }
    else if(data.weather[0].main == 'Smoke') {
        sky.classList.add('fa-solid', 'fa-cloud-bolt')
    }
    else if(data.weather[0].main == 'Haze') {
        sky.classList.add('fa-solid', 'fa-smog')
    }
    else if(data.weather[0].main == 'Rain') {
        sky.classList.add('fa-solid', 'fa-cloud-showers-water')
    }
    else if(data.weather[0].main == 'Mist') {
        sky.classList.add('fa-solid', 'fa-cloud-sun')
    }
    else if(data.weather[0].main == 'Drizzle') {
        sky.classList.add('fa-solid', 'fa-cloud-sun-rain')
        sky.src = "/assets/clouds.png";
    }
    else if(data.weather[0].main == 'Clear') {
        sky.src = "/assets/clear.png"
    }
    else if(data.weather[0].main == 'Smoke') {
        sky.src = "/assets/drizzle.png"
    }
    else if(data.weather[0].main == 'Clear') {
        sky.src = "/assets/clear.png"
    }
    else if(data.weather[0].main == 'Rain') {
        sky.src = "/assets/rain.png"
    }
    else if(data.weather[0].main == 'Mist') {
        sky.src = "/assets/mist.png"
    }
    else if(data.weather[0].main == 'Drizzle') {
        sky.src = "/assets/drizzle.png"
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
    searchBox.value = "";

    const existingClasses = Array.from(sky.classList)
    for(let className of existingClasses) {
        sky.classList.remove(className)
    }

})