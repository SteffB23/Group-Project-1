//Array of objects:
var form = "Enter Addition Information here"
var data = [
    {
      name: 'Pizza',
      cost: '$3.00'
    },

    {
      name: 'Salad',
      cost: '$7.50'
    },
 
    {
      name: 'Pasta Bowl',
      cost: '$8.99'
    },

    {
      name: 'Rice and Beans',
      cost: '$4.99'
    },

    {
      name: '5 peice Chicken Wings',
      cost: '$5.39'
    },


    {
      name: 'Hot Soup',
      cost: '$2.00'
    },

    {
      name: 'Tacos',
      cost: '$1.49 each'
    },

        {
      name: 'Drink',
      cost: '$1.99'
    },

    {
      name: 'Bag of Chips',
      cost: '$.99'
    },
    {
      name: 'Surprise Me',
      cost: '$5.00'
    },

]


var info = document.querySelector('#info')

var details = data.map(function(data) {
    return (
        '<div>' + data.name + ' ' + ' will cost ' + data.cost + ' Plus Tax' + '</div>'
    )
});

info.innerHTML = details.join(' ');

//Work on event listeners here:

var additionalInfo = document.querySelector("#additionalInfo");
additionalInfo.addEventListener('submit',function(event){
  event.preventDefault();

  console.log("Form has been submitted! Your food is on the way!");

});
