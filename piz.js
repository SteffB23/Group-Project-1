



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

// get checked value from checkbox:
var addBtn = document.getElementById('add')
var textEl =document.getElementById('text1')

addBtn.addEventListener('click', printChecked)
function printChecked() {
  var items = document.getElementsByName("acs");
  var selectedItems = " ";
  for (var i = 0; i < items.length; i++) {
      if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
  }
  
  localStorage.setItem('selected',JSON.stringify(selectedItems) );
  
 
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

// Geolocation:


var locationEl = document.getElementById('submitOrder')
 var newDiv = document.getElementById('myLocation')







function getApiGeo(){ 

locationEl.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(data =>{
        console.log(data);
    },(error)=>console.log(error))
    
    
});

function success(data){

    var api_key = '8cf6f7e105304f8c975adee408dc60d8';
    var latitude = data.coords.latitude;
    var longitude = data.coords.longitude;
  
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  
    var request_url = api_url
      + '?'
      + 'key=' + api_key
      + '&q=' + encodeURIComponent(latitude + ',' + longitude)
      + '&pretty=1'
      + '&no_annotations=1';
  
    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward
  
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
  
    request.onload = function() {
     
      // https://opencagedata.com/api#codes
  
      if (request.status === 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        // replace alert by an Element tag

       

        // lets store the address and use it for confirmation.
        var address =data.results[0].formatted;
        localStorage.setItem('Address',JSON.stringify(address));
       
  
      } else if (request.status <= 500){ 
        
                             
        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
      } else {
        console.log("server error");
      }
    };
  
    request.onerror = function() {
      // There was a connection error of some sort
      console.log("unable to connect to server");        
    };
  
    request.send();  // make the request
}
navigator.geolocation.getCurrentPosition(success, console.error);
}
getApiGeo();


// get User location
var enterLocation = document.getElementById('submitOrder');
enterLocation.addEventListener('click',getloc);

function getloc(){


   var addresEl = document.getElementById('adress')
   addresEl.innerHTML = "Delivered To :"+ ''+ JSON.parse(localStorage.getItem('Address'));
   textEl.innerHTML =JSON.parse(localStorage.getItem('selected'))

  var customer =document.getElementById('customerName')
  customer.innerHTML =JSON.parse(localStorage.getItem('name'))

  var customerPhone = document.getElementById('customerPhone');
  customerPhone.innerHTML = JSON.parse(localStorage.getItem('phone'));
    

}





