


var pizzaEl =document.querySelector('.max-h-12-1');

var weatherContainer = document.getElementById('weather');

const format2 = "YYYY-MM-DD"
var date2 = new Date();
dateTime2 = moment(date2).format(format2);
document.getElementById("demo2").innerHTML = "As of :"+"" +dateTime2;





function getApiW(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-75&appid=6939a1ebe83748be1cc4bbe471aef1a9&units=imperial')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
console.log(data);
var wthEl = document.createElement('h2');
wthEl.setAttribute('style', ' display: block;font-size: 3.5rem;line-height: .96em;font-weight: 500;');



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

// For main Menu Start From here

var pizzaEl = document.querySelector('.max-h-12-1')
console.log(pizzaEl)


pizzaEl.addEventListener('click', chooseMenu);
  


function chooseMenu(){
    console.log('test')
    window.location= "Pizza.html"
}
// Pasta selects(Pasta) start from here 
var pizzaEl = document.querySelector('.max-h-12-2')
console.log(pizzaEl)


pizzaEl.addEventListener('click', chooseMenu2);
  


function chooseMenu2(){
    console.log('test')
    window.location= "Pasta.html"
}

//  Pasta selects(Pasta) start from here 
var pizzaEl = document.querySelector('.max-h-12-3')
console.log(pizzaEl)


pizzaEl.addEventListener('click', chooseMenu3);
  


function chooseMenu3(){
    console.log('test')
    window.location= "Salad.html"
}

// sandwiches :
var sandwichEl = document.querySelector('.max-h-12-4')
console.log(sandwichEl)


sandwichEl.addEventListener('click', chooseMenu4);
  


function chooseMenu4(){
    console.log('test')
    window.location= "sandwich.html"
}


// Main Menu End here:

var homeButton = document.getElementById('homeBtn');
homeButton.addEventListener('click', function(e){
  console.log("test")
window.location = "index.html";


});