'use strict';
console.log('it works')
function getRandimInt(max) {
    return Math.floor(Math.random()* max);
}

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', runFunctionImage1); 

img2.addEventListener('click', function(){ 
  console.log('I am in img2');
})

img3.addEventListener('click', function(){
  console.log('I am in img3');
})

function runFunctionImage1() {
    console.log('I am in img1')
}


let PRODUCTS_ARRAY = [
  { HTMLid : 'bag', imgURL: '../images/bag.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'banana', imgURL: '../images/banana.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'bathroom', imgURL: '../images/bathroom.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'breakfast', imgURL: '../images/breakfast.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'boots', imgURL: '../images/boots.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'bubblegum', imgURL: '../images/bubblegum.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'chair', imgURL: '../images/chair.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'cthulhu', imgURL: '../images/cthulhu.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'dog-duck', imgURL: '../images/dog-duck.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'dragon', imgURL: '../images/dragon.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'pen', imgURL: '../images/pen.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'pet-sweep', imgURL: '../images/pet-sweep.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'scissors', imgURL: '../images/scissors.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'shark', imgURL: '../images/sharl.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'sweep', imgURL: '../images/sweep.png', totalViews: 0,totalVotes: 0},
  { HTMLid : 'tauntaun', imgURL: '../images/tauntaun.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'unicorn', imgURL: '../images/unicorn.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'water-can', imgURL: '../images/water.can.jpg', totalViews: 0,totalVotes: 0},
  { HTMLid : 'wine-glass', imgURL: '../images/wine-glass.jpg', totalViews: 0,totalVotes: 0},
]
let clicks = 0;

function RenderImages(){
  console.log('Total clicks =', clicks);
  for (let i=0; i<= 2; i++){
imageContainer = document.getElementById(`Img${i}Container`);
let img = document.createElement('img');
img.setAttribute('scr', PRODUCTS_ARRAY[i].imgURL);
img.setAttribute('id', PRODUCTS_ARRAY[i].HTMLid);
imageContainer.appendChild(img);
PRODUCTS_ARRAY[i].totalViews++;
console.log('total views: ', PRODUCTS_ARRAY[i].HTMLid, PRODUCTS_ARRAY[i].totalviews);

}
}
function handleCLick(event) {
  clicks++;
  console.log('Image' + event.target.id + ' was clicked');
  let imgageId = event.target.id;

for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
  if(imageid == PRODUCTS_ARRAY[i].HTMLid.id){
  PRODUCTS_ARRAY[i].totalVotes++
  console.log('total votes', PRODUCTS_ARRAY[i].totalVotes);
  }
  }
if (clicks !== 25){
  for(let i=0; i <=2; i++) {
    let shuffle = getrandomInt (PRODUCTS_ARRAY.length);
    let removeItem = PRODUCTS_ARRAY.shift();
    let addItem = PRODUCTS_ARRAY.splice(shuffle =4, 0, removeItem);

}

for (let i=0; i<3; i++) {
  let parent = document.getElementById(`Img${i}Container`);
  parent.removeChild(parent.lastChild);

}

 RenderImages();
} else {
  let divs = documnet.getElementsByTagName('div');
  for (let i=1; i< divs.length - 1; i++) {
    divs[i].removeEventListners('clicks', handleClick);
    console.log('25 clicks')
}
}

(function startApp(){
  console.log('marissa 2021');
  for(let i=0; i < 3; i++ ){
    let listen = document.getElementById(`Img${i}Container`);
  listen.addEventListner('click', handleClick);
  }

RenderImages();
})();
