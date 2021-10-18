

var pizzaEl =document.querySelector('.max-h-12-1');

var weatherContainer = document.getElementById('weather');

const format2 = "YYYY-MM-DD"
var date2 = new Date();
dateTime2 = moment(date2).format(format2);
document.getElementById("demo2").innerHTML = dateTime2;





function getApiW(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-75&appid=6939a1ebe83748be1cc4bbe471aef1a9&units=imperial')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
console.log(data);
var wthEl = document.createElement('h2');
wthEl.setAttribute('style', ' display: block;font-size: 1rem;line-height: .96em;font-weight: 500;');



wthEl.textContent =data.main.temp+"°";
weatherContainer.append(wthEl);

    })
}
getApiW();







pizzaEl.addEventListener('click', function select(e){
    console.log("test");

});
function select(){
    fetch('')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
         
    })
}