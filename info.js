

var weatherContainer = document.getElementById('weather');

var homeButton = document.getElementById('homeBtn');

// time:
const format2 = "YYYY-MM-DD"
var date2 = new Date();
dateTime2 = moment(date2).format(format2);
document.getElementById("demo2").innerHTML = "As of :"+"" +dateTime2;

homeButton.addEventListener('click', function(e){
  console.log("test")
window.location = "index.html";


});

var menuButton = document.getElementById('menuBtn');

menuButton.addEventListener('click', function(e){
  console.log("test")
  window.location ="menu.html";


});







var nameEl = document.getElementById('name').value;

var divEl =document.getElementById('divtest');

var enterBtn = document.getElementById('enterbtn');

var form =document.querySelector('.space-y-6')

enterBtn.addEventListener('click', getInfo);


function getInfo(){
    
    var nameEl = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone').value;
    
  localStorage.setItem('name',JSON.stringify(nameEl));
  localStorage.setItem('phone',JSON.stringify(phoneNumber))
  
}
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
  