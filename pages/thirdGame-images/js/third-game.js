"use strict"


document.querySelector('.button-start').onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   document.querySelector('.button-start').classList.add('activated');
}
const BUTTON_ACIVATED = document.querySelector('.button-start');

if (true) {
   game();
}

//линия времени 

function getId(id) {
   return document.getElementById(id);
}

function game() {
   function startDeadeLine() {

      let deadeLine = getId("deadeLine");

   }




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

   let hasFlippedCard = false;
   let lockBoard = false;
   let firstCard, secondCard;

   //звук
   let audio = new Audio('/page-for-memory/sound/successfull.mp3');


   function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;

      this.classList.add('flip');

      if (!hasFlippedCard) {
         hasFlippedCard = true;
         firstCard = this;
         return;
      }

      secondCard = this;
      hasFlippedCard = false;

      checkForMatch();



   }
   //добавляет счёт для открытых карт
   let doom = 0;
   document.getElementById("scoreOpenedCards").innerHTML = doom;

   function checkForMatch() {
      if (firstCard.dataset.framework === secondCard.dataset.framework) {

         document.getElementById("scoreOpenedCards").innerHTML = doom += 1;
         audio.play();

         disableCards();
         return;
      }

      unflipCards();
   }

   function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
   }

   function unflipCards() {
      lockBoard = true;

      setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');

         lockBoard = false;
         resetBoard();
      }, 1500);
   }

   function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
   }

   function shuffle() {
      cards.forEach(card => {
         let ramdomPos = Math.floor(Math.random() * 18);
         card.style.order = ramdomPos;
      });
   }

   shuffle();
   cards.forEach(card => card.addEventListener('click', flipCard));
};