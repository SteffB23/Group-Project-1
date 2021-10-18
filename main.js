

// MainPageNew Start Here
// MainPageNew Start Here


//  date and time:


var orderNowbtn =document.getElementById('myBtn-left');

var homeButton = document.getElementById('homeBtn')
var menuButton = document.getElementById('menuBtn')
var aboutButton = document.getElementById('aboutBtn')
var contactButton = document.getElementById('contactBtn')

orderNowbtn.addEventListener('click',mainMenu);

function mainMenu(){
    window.location = 'MenuPageOrigin.html'
}
var orderNowbtn =document.getElementById('myBtn-right');

orderNowbtn.addEventListener('click',orderNow);

function orderNow(){
    window.location = 'infoPage.html'
}
// navBar addEventListerners:

homeButton.addEventListener('click', function(e){
    console.log("test")
window.location = "MainPageNew.html";


});

menuButton.addEventListener('click', function(e){
    console.log("test")
    window.location ="MenuPageOrigin.html";
    
    });

    aboutButton.addEventListener('click', function(e){
        console.log("test")
        
        });
        contactButton.addEventListener('click', function(e){
            console.log("test")
            
            });
// MainPageNew ENDs Here
// MainPageNew ENDs Here