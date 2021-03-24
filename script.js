var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');

// button.addEventListener('click',function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&units=imperial&appid=9a255556c2668bb58d6390fe1aa8f993')
//     .then(response => response.json())
//     .then(data => console.log(data))

//     .catch(err => alert("Wrong city zip code!"))
// })

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&units=imperial&appid=9a255556c2668bb58d6390fe1aa8f993')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];

        city.innerHTML = 'Weather in: ' + cityValue;
        desc.innerHTML = 'Currently: ' + descValue;
        temp.innerHTML = 'Temperature: ' + tempValue + '°F';
        humidity.innerHTML = 'Humidity: ' + humidityValue + '%';
        wind.innerHTML = 'Wind: ' + windValue + 'mp/h';
    })


    .catch(err => alert("Wrong city zip code!"))
})
