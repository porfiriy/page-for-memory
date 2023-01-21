"use strict"

//звук
let audioComplete = new Audio('/page-for-memory/sound/successfull2.mp3'); 
let audioVictory = new Audio('/page-for-memory/sound/successfull.mp3');
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');
let audioFaile = new Audio('/page-for-memory/sound/faile.mp3');
let audioClick = new Audio('/page-for-memory/sound/click.mp3');

let ModeTimeAnim;

let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");


let deadeLine = document.getElementById("deadeLine");
let easyModeButton = document.querySelector('.easy-mode-button');
let normalModeButton = document.querySelector('.normal-mode-button');
let hardModeButton = document.querySelector('.hard-mode-button');
let crazyModeButton = document.querySelector('.crazy-mode-button');
let modeOptionsContainer = document.querySelector('.mode-options-container');
let gameMode = document.querySelector('.game-mode');
let gameModeStyleEasy = document.querySelector('.game-mode-style-easy');
const startButtonContainer = document.querySelector('.button-start-container');
const startButtonGameMode = document.querySelector('.start-menu__game-mode');
const victoryLooseScreenContainer = document.querySelector('.victory-loose-screen-container');
const victoryLooseScreenGameMode = document.querySelector('.victory-loose-screen__mode');
const victoryLooseScreenWinLooseText = document.querySelector('.victory-loose-screen__win-loose-text');
const victoryLooseScreenResultsButton = document.querySelector('.victory-loose-screen__results-button');
const resultsMenuContainer = document.querySelector('.results-menu-container');
const resultsMenuMode = document.querySelector('.results-menu__mode');
const resultsMenuWinLooseItem = document.querySelector('.items-container__win-loose-item');
const resultsMenuTimeItem = document.querySelector('.items-container__time-item');
const resultsMenuOpenedCardsItem = document.querySelector('.opened-cards');
const resultsMenuDoneCardsItem = document.querySelector('.items-container__done-cards-item');
const resultsMenuWinLooseIcon = document.querySelector('.items-container__win-loose-icon');
const resultsMenuTime = document.querySelector('.results-menu__time');
const resultsMenuIqItem = document.querySelector('.items-container__iq-item');



//при нажатии на отмену вспл окна настройки 
document.querySelector('.pop-up__cancel').onclick = function () {
   settings.style = 'visibility:hidden;';

};
//при нажатии на иконку настроек
document.querySelector('.linkToTheSettings').onclick = function () {

   settings.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна назад
document.querySelector('.pop-up__cancel2').onclick = function () {
   comeback.style = 'visibility:hidden;';

};
//при нажатии на иконку назад
document.querySelector('.comeback-button').onclick = function () {

   comeback.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна рестарт
document.querySelector('.pop-up__cancel3').onclick = function () {
   restart.style = 'visibility:hidden;';

};
//при нажатии на иконку рестарт
document.querySelector('.linkToTheRestart').onclick = function () {

   restart.style = 'visibility:visible;';

};

easyModeButton.onclick = function () {//при нажатии на изи кнопку сложности
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Легко';
   gameMode.classList.add('game-mode-style-easy');
   ModeTimeAnim = '60';
   startButtonContainer.style = 'display: block;';
   startButtonGameMode.innerHTML = 'Легко';
   startButtonGameMode.classList.add('start-menu__easy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__easy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Легко';
   resultsMenuMode.classList.add('results-menu__easy-mode');
   resultsMenuMode.innerHTML = 'Легко';
}
normalModeButton.onclick = function () {
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Нормально';
   gameMode.classList.add('game-mode-style-normal');
   ModeTimeAnim = '50';
   startButtonContainer.style = 'display: block;';
   startButtonGameMode.innerHTML = 'Нормально';
   startButtonGameMode.classList.add('start-menu__normal-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__normal-mode');
   victoryLooseScreenGameMode.innerHTML = 'Нормально';
   resultsMenuMode.classList.add('results-menu__normal-mode');
   resultsMenuMode.innerHTML = 'Нормально';
}
hardModeButton.onclick = function () {
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Сложно';
   gameMode.classList.add('game-mode-style-hard');
   ModeTimeAnim = '40';
   startButtonContainer.style = 'display: block;';
   startButtonGameMode.innerHTML = 'Сложно';
   startButtonGameMode.classList.add('start-menu__hard-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__hard-mode');
   victoryLooseScreenGameMode.innerHTML = 'Сложно';
   resultsMenuMode.classList.add('results-menu__hard-mode');
   resultsMenuMode.innerHTML = 'Сложно';
}
crazyModeButton.onclick = function () {
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Безумно';
   gameMode.classList.add('game-mode-style-crazy');
   ModeTimeAnim = '34';
   startButtonContainer.style = 'display: block;';
   startButtonGameMode.innerHTML = 'Безумно';
   startButtonGameMode.classList.add('start-menu__crazy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__crazy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Безумно';
   resultsMenuMode.classList.add('results-menu__crazy-mode');
   resultsMenuMode.innerHTML = 'Безумно';
}
victoryLooseScreenResultsButton.onclick = function () {
   resultsMenuContainer.style = 'display:block;'
}



function game() {

   //считает время с начала игры
   let seconds = 0;
   let minutes = 0;
   function timerGame() {
      let timerID = setInterval(function () {

         seconds += 1;
      }, 1000)
   }
   timerGame();

   deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы

   //анимация проигриша 
   function showMessage() {
      victoryLooseScreenContainer.style = 'display:flex;';
      victoryLooseScreenWinLooseText.innerHTML = 'Поражение!'
      victoryLooseScreenWinLooseText.classList.add('loose-text-red');
      resultsMenuWinLooseItem.innerHTML = 'Поражение!'
      resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-red');
      resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-down-outline"></ion-icon>';
      resultsMenuOpenedCardsItem.innerHTML = `${score}`;
      resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-red');
      resultsMenuTimeItem.classList.add('items-container__time-item-red');
      resultsMenuTime.innerHTML = `${seconds}`;
   }
   deadeLine.addEventListener("animationend", showMessage);




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
   let victoryTab = document.querySelector('.textVictory');
   let looseTab = document.querySelector('.textLoose');


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
   let score = 0;
   document.getElementById("scoreOpenedCards").innerHTML = score;

   function checkForMatch() {
      if (firstCard.dataset.framework === secondCard.dataset.framework) {

         document.getElementById("scoreOpenedCards").innerHTML = score += 1;

         //анимация победы 
         if (score == 9) {
            deadeLine.style = "animation-play-state: paused ";
            victoryLooseScreenContainer.style = 'display:flex;';
            victoryLooseScreenWinLooseText.innerHTML = 'Победа!'
            victoryLooseScreenWinLooseText.classList.add('victory-text-green');
            resultsMenuWinLooseItem.innerHTML = 'Победа!'
            resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-green');
            resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-up-outline"></ion-icon>';
            resultsMenuOpenedCardsItem.innerHTML = '9';
            resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-green');
            resultsMenuTimeItem.classList.add('items-container__time-item-green');
            resultsMenuTime.innerHTML = `${seconds}`;
            resultsMenuIqItem.innerHTML = '+50';
         }
         //добавляет звук
         audioComplete.play();

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
}


//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();
      game();
   }
}

