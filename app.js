'use scrict';

//globals
var busImagesTags = document.getElementById('busImages');
var busLeft = document.getElementById('busLeft');
var busMiddle = document.getElementById('busMiddle');
var busRight = document.getElementById('busRight');

var leftBusIndex = null;
var middleBusIndex = null;
var rightBusIndex = null;

var busVote = 0 ;

//constructor function

function Bus(name, image){
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicked = 0;
}
Bus.allImages.push(this);

//generate random number between 0 - 1
function randomBus(){
  var randomNumber = Math.floor(Math.random() * Bus.allImages.length);
  return randomNumber;
}
// renders the images on the webpage
function renderBus(){
  //assigns different values to the incoming images
  do {
    leftBusIndex = randomBus();
    middleBusIndex = randomBus();
    rightBusIndex = randomBus();
  // keeps the two images from being assigned the same value thus preventing duplicates
  }while(leftBusIndex === rightBusIndex || leftBusIndex === middleBusIndex || rightBusIndex === middleBusIndex);
  Bus.allImages[leftBusIndex].views++;
  Bus.allImages[middleBusIndex].views++;
  Bus.allImages[busRight].views++;
  //set the source of the image tags to specific images in the array
  busLeft.src = Bus.allImages[busLeft].image;
  busMiddle.src = Bus.allImages[middleBusIndex].image;
  busRight.src = Bus.allImages[busRight].image;
}

var handleClickOnBus = function(event){
  var busClicked = event.target.id;
  if(busClicked === 'busLeft' || busClicked === 'busMiddle' || busClicked === 'busRight'){
    //does logic to increment the number
    busVote++;
    if(busClicked === 'bustLeft'){
      Bus.allImages[leftBusIndex].clicked++;
    }else if(busClicked === 'busMiddle'){
      Bus.allImages[middleBusIndex].clicked++;
    }else if(busClicked === 'busRight'){
      Bus.allImages[rightBusIndex].clicked++;
    }else{
    //tells the user to click on an image if they have not
      alert('you didn\'t select an image');
    }
  }
};
console.log(Bus.allImages[leftBusIndex]);
console.log(Bus.allImages[middleBusIndex]);
console.log(Bus.allImages[rightBusIndex]);

if(busVote === 5){
  busImagesTags.removeEventListener('click', handleClickOnBus);
  console.log('you have completed the vote');
  for(var i = 0; i < Bus.allImages.length; i++){
    var bus = Bus.allImages[i];
    console.log(`${bus.name} received ${bus.clicked} votes with ${bus.views} views`);
  }
}else{
  renderBus();
}
Bus.allImages = [];
new Bus
