
var orderNowbtn =document.getElementById('myBtn-left');


var weatherContainer = document.getElementById('weather');

var homeButton = document.getElementById('homeBtn')
var menuButton = document.getElementById('menuBtn')
var aboutButton = document.getElementById('aboutBtn')
var contactButton = document.getElementById('contactBtn')

// Time and Date:

const format2 = "YYYY-MM-DD"
var date2 = new Date();
dateTime2 = moment(date2).format(format2);
document.getElementById("demo2").innerHTML = "As of :"+"" +dateTime2;

// weather

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



orderNowbtn.addEventListener('click',mainMenu);

function mainMenu(){
    window.location = 'menu.html'
}
var orderNowbtn =document.getElementById('myBtn-right');

orderNowbtn.addEventListener('click',orderNow);

function orderNow(){
    window.location = 'infoPage.html'
}
// navBar addEventListerners:

homeButton.addEventListener('click', function(e){
    console.log("test")
window.location = "index.html";


});

menuButton.addEventListener('click', function(e){
    console.log("test")
    window.location ="menu.html";
    
    });

    aboutButton.addEventListener('click', function(e){
        console.log("test")
        
        });
        contactButton.addEventListener('click', function(e){
            console.log("test")
            
            });



