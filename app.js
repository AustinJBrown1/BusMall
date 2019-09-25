'use scrict';
////////////////////////////////////////////////////////////////////////////////////////////////
//globals
var busImagesTags = document.getElementById('busImages');
var busLeft = document.getElementById('busLeft');
var busMiddle = document.getElementById('busMiddle');
var busRight = document.getElementById('busRight');
var leftBusIndex = 0;
var middleBusIndex = 0;
var rightBusIndex = 0;
var busVote = 0 ;
///////////////////////////////////////////////////////////////////////////////////////////////
//constructor function
function Bus(name, image){
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicked = 0;
  Bus.allImages.push(this);
}
///////////////////////////////////////////////////////////////////////////////////////////////
//generate random number between 0 - 1
function randomBus(){
  var randomNumber = Math.floor(Math.random() * Bus.allImages.length);
  return randomNumber;
}
///////////////////////////////////////////////////////////////////////////////////////////////
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
  Bus.allImages[rightBusIndex].views++;
  //set the source of the image tags to specific images in the array
  busLeft.src = Bus.allImages[leftBusIndex].image;
  busMiddle.src = Bus.allImages[middleBusIndex].image;
  busRight.src = Bus.allImages[rightBusIndex].image;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//displays the votes and views list after the clicking is finished
function renderBusList(){
  var busData = document.getElementById('busData');
  var voteLists = document.createElement('ul');
  voteLists.textContent = 'Vote and view results';
  for(var i = 0; i < Bus.allImages.length; i++){
    var bus = Bus.allImages[i];
    var tableData = document.createElement('li');
    tableData.textContent = `${bus.name} received ${bus.clicked} votes with ${bus.views} views`;
    voteLists.appendChild(tableData);
  }
  busData.appendChild(voteLists);
}
///////////////////////////////////////////////////////////////////////////////////////////////
//enables the user to click on the images
var handleClickOnBus = function(event){
  var busClicked = event.target.id;
  if(busClicked === 'busLeft' || busClicked === 'busMiddle' || busClicked === 'busRight'){
    //does logic to increment the number of votes for any given object
    busVote++;
    if(busClicked === 'busLeft'){
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
  //displays the votes and views in the browser console
  console.log(Bus.allImages[leftBusIndex]);
  console.log(Bus.allImages[middleBusIndex]);
  console.log(Bus.allImages[rightBusIndex]);
  //measures the amount votes taken
  if(busVote === 25){
    busImagesTags.removeEventListener('click', handleClickOnBus);
    console.log('you have completed the vote');
    alert('You completed the vote');
    for(var i = 0; i < Bus.allImages.length; i++){
      var bus = Bus.allImages[i];
      console.log(`${bus.name} received ${bus.clicked} votes with ${bus.views} views`);
    }
    renderBusList();
  }else{
    renderBus();
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////
//these are the constucted objects
Bus.allImages = [];
new Bus('Cool R2D2 bag','/Images/bag.jpg');
new Bus('Banana Slicer','/Images/banana.jpg');
new Bus('Bathroom monstrosity','/Images/bathroom.jpg');
new Bus('Useless Boots','/Images/boots.jpg');
new Bus('A mean, lean, breakfast machine','/Images/breakfast.jpg');
new Bus('Thats a spicy meatball!','/Images/bubblegum.jpg');
new Bus('Uncomfortable chair','/Images/chair.jpg');
new Bus('The dark god','/Images/cthulhu.jpg');
new Bus('The abomitable duck-dog','/Images/dog-duck.jpg');
new Bus('The dragonslayers breakfast','/Images/dragon.jpg');
new Bus('Just a useful uPENsil','/Images/pen.jpg');
new Bus('Make your dogs clean their own mess!','/Images/pet-sweep.jpg');
new Bus('For a cold Hoth night','/Images/tauntaun.jpg');
new Bus('For when an actual pizza cutter is just too basic.','/Images/scissors.jpg');
new Bus('The JAWS experience!','/Images/shark.jpg');
new Bus('Tired of your infant not having to clean? Try this!','/Images/sweep.png');
new Bus('The tasty treat that can\'t be beat!','/Images/unicorn.jpg');
new Bus('Bane of all gardeners','/Images/water-can.jpg');
new Bus('Tentacle usb free with purchase of Cthuhlu!(plus shipping and handling)','/Images/usb.gif');
new Bus('Instructors favorite image','/Images/wine-glass.jpg');
////////////////////////////////////////////////////////////////////////////////////////////////
console.log(Bus.allImages);
renderBus();
busImagesTags.addEventListener('click', handleClickOnBus);


