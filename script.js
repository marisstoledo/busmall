'use strict';

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
img.setAttribute('class', 'item');


imageContainer.appendChild(img);
PRODUCTS_ARRAY[i].totalViews++;
console.log('total views: ', PRODUCTS_ARRAY[i].HTMLid, PRODUCTS_ARRAY[i].totalviews);

}
}
function handleCLick(event) {
  clicks++;
  console.log('Image' + event.target.id + ' was clicked');
  let imgageid = event.target.id;

for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
  if(imageid === PRODUCTS_ARRAY[i].HTMLid.id){
  PRODUCTS_ARRAY[i].totalVotes++
  console.log('total votes', PRODUCTS_ARRAY[i].totalVotes);
  }
  }
if (clicks !== 25){
  for(let i=0; i <=2; i++) {
  
    
for (let i=0; i<3; i++) {
  let random= Math.floor(Math.random() * PRODUCTS_ARRAY.length -1);
  let item= PRODUCTS_ARRAY.shift();
  PRODUCTS_ARRAY.splice(PRODUCTS_ARRAY.length -1, 0, item);

}
for(let i=0; i<3; i++) {
  let parent = document.getElementById(`Img${i}Container`);
  parent.removeChild(parent.lastChild);

}
console.log('clicks:', clicks);

 RenderImages();

}else {
  let divs = documnet.getElementsByTagName('div');
  for (let i=1; i<divs.length - 1; i++) {
    divs[i].removeEventListners('clicks', handleClick);
  }
    console.log('25 clicks')
    renderResults();
}
}
function renderResults() {
  let resultSection = document.getElementById('resultSection');
  let div = document.createElement('div');
  div.setAttribute('id', 'result');
  resultSection.appendChild(div);

  let h3 = document.createElement('h3');
  h3.textContent = 'Results: ';
  div.appendChild(h3);

  let ol = document.createElement('ol');
  div.appendChild(ol);
  for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent= `${PRODUCTS_ARRAY[i].totalVotes} for ${PRODUCTS_ARRAY[i].HTMLid}`;
    ol.appendChild(listItem);
  }

  renderChart();
 function renderChart() 
     console.log('renderChart was called')
       const barData = {
      type: 'bar',
      data: {
        labels : [],
        datasets : [
          {
            data: [],
            backgroundColor: 'rgb(64, 211, 191',
            borderColor: 'rbb(46, 146, 133',
             pointBackgroundColor: 'rgb(46, 135, 100',
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            maxBarThickness: 30,
          }],
          yAxes: [{
            gridLines: {
              offsetGridLines: false,
            },
            ticks: {stepSize: 1},
            maintainAspectRatio: false,
          }]
        },
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Final Vote Data'
        }
      }
    };
  
    let container = document.getElementById('graph');
  
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    container.appendChild(canvas);
  
    for ( let i=0; i< PRODUCTS_ARRAY.length; i++) {
      barData.data.labels.push(PRODUCTS_ARRAY[i].HTMLid)
      barData.data.datasets[0]['data'].push(PRODUCTS_ARRAY[i].totalVotes);
    }
  
    new Chart(ctx, barData);
  
  }
  
  (function startApp() {
    for(let i=0; i < 3; i++) {
      let imgContainer = document.getElementById(`img${i}Container`);
      imgContainer.addEventListener('click', handleClick);
    }
    renderImages();
})();
