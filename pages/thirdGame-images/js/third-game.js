"use strict"



document.querySelector('.words-game-start').onclick = function () {
   document.querySelector('.words-game-start,.start-menu').classList.add('activated');
   document.querySelector('.words-game-start').classList.add('activated');
}

const cardsArr = [
   { imageName: 'image1', imagePath: 'page-for-memory/pages/thirdGame-images/img/1.png' },
   { imageName: 'image2', imagePath: 'page-for-memory/pages/thirdGame-images/img/2.png' },
   { imageName: 'image3', imagePath: 'page-for-memory/pages/thirdGame-images/img/3.png' },
   { imageName: 'image4', imagePath: 'page-for-memory/pages/thirdGame-images/img/4.png' },
   { imageName: 'image5', imagePath: 'page-for-memory/pages/thirdGame-images/img/5.png' },
   { imageName: 'image6', imagePath: 'page-for-memory/pages/thirdGame-images/img/6.png' },
   { imageName: 'image7', imagePath: 'page-for-memory/pages/thirdGame-images/img/7.png' },
   { imageName: 'image8', imagePath: 'page-for-memory/pages/thirdGame-images/img/8.png' }
]

cardsArr.sort(function () { return 0.5 - Math.random() });
console.log(cardsArr);

const span = document.querySelector('#span');
const sectionImages = document.querySelector('.section-image');
const scoreOpened = document.querySelector('.score-openedCards');

function createBorder() {
   for (let i = 0; i < cardsArr.length; i++) {
      const imgCard = document.createElement('IMG');
      imgCard.setAttribute('id', String(i));
      imgCard.setAttribute('src', 'page-for-memory/pages/thirdGame-images/img/0.jpg')
      imgCard.addEventListener('click', flipCard);
      cardsDiv.appendChild(imgCard);
   }
}

let cardsChosenArr = [];
let cardsChosenArrId = [];
let nofOpenedCardsArr = [];

const cards = document.querySelectorAll('.memory-card');


function flipCard() {
   this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));