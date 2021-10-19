
// // MainPageNew Start Here
// // MainPageNew Start Here

// var orderNowbtn =document.getElementById('myBtn-left');

// orderNowbtn.addEventListener('click',mainMenu);

// function mainMenu(){
//     window.location = 'MenuPageOrigin.html'
// }
// var orderNowbtn =document.getElementById('myBtn-right');

// orderNowbtn.addEventListener('click',orderNow);

// function orderNow(){
//     window.location = 'infoPage.html'
// }
// // MainPageNew ENDs Here
// // MainPageNew ENDs Here



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
// Get User curent Location:

var locationEl = document.getElementById('getLocation')
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
      // see full list of possible response codes:
      // https://opencagedata.com/api#codes
  
      if (request.status === 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        // replace alert by an Element tag

        // var locationEl= document.getElementById('location');
        // locationEl.textContent="My current Address :" + ""+data.results[0].formatted;

        // lets store the address and use it for confirmation.
        var address =data.results[0].formatted;
        localStorage.setItem('Address',JSON.stringify(address));
        // alert(data.results[0].formatted); // print the location
  
      } else if (request.status <= 500){ 
        // We reached our target server, but it returned an error
                             
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
var enterLocation = document.getElementById('getLocation');
enterLocation.addEventListener('click',getloc);

function getloc(){


   var texTag = document.createElement('h2');
   texTag.textContent = "Is this your current Location :"+ ''+ JSON.parse(localStorage.getItem('Address'));
   newDiv.append(texTag);
    
   var yesButton =document.createElement('button');
var noButton =document.createElement('button');
yesButton.textContent = 'Yes'
noButton.textContent = 'No'
newDiv.append(yesButton);
newDiv.append(noButton);
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
// Main Menu End here:
