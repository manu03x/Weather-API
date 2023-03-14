const button = document.getElementById('get-weather')
const input = document.getElementById('city')

button.addEventListener('click', function(){
    getWeather(input.value)
})

function getWeather(city) {

    const apiKey = "fb3e10442db0a1aea7cd8d7903f4e19a"

    const request = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`

    fetch(request)
        .then(response => response.json())
        .then(json => showWeather(json))
}


function showWeather(city) {
    console.log(city)
    const weatherContainer = document.getElementById('weather')

    while(weatherContainer.firstChild){
        weatherContainer.firstChild.remove();
    }
    
    weatherContainer.innerHTML += `
    <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="${city.current.weather_icons[0]}" alt="Avatar">
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">${city.request.query} ${city.current.temperature} &#8451 </h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">${city.location.localtime}</time></p>
            </div>
        </div>
    </div>
        <div class="uk-card-body">
            <p>${city.current.weather_descriptions[0]}.</p>
        </div>
    </div>
    
    `
    
}