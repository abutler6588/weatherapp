var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&units=imperial&appid=9a255556c2668bb58d6390fe1aa8f993')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue + ' °F';
        desc.innerHTML = descValue;
    })

    

    .catch(err => alert("Wrong city zip code!"))
})
