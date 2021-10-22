

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



// Testing curent Wather Api:
    
// // get the exact weather:
// function getWeather(latitude,longitude ){

//   var getUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6939a1ebe83748be1cc4bbe471aef1a9`;
//   fetch(getUrl)
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(data){
//     console.log(data)
//   })
// }
// weatherEl.addEventListener('click', getWeather);



