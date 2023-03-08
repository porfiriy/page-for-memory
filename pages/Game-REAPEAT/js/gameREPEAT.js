"use strict"

//звук
let audioComplete = new Audio('/page-for-memory/sound/successfull2.mp3');
let audioVictory = new Audio('/page-for-memory/sound/successfull.mp3');
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');
let audioFaile = new Audio('/page-for-memory/sound/faile.mp3');
let audioClick = new Audio('/page-for-memory/sound/click.mp3');


let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

const victoryLooseScreenContainer = document.querySelector('.victory-loose-screen-container');
const victoryLooseScreenWinLooseText = document.querySelector('.victory-loose-screen__win-loose-text');
const victoryLooseScreenResultsButton = document.querySelector('.victory-loose-screen__results-button');
const resultsMenuContainer = document.querySelector('.results-menu-container');
const resultsMenuWinLooseItem = document.querySelector('.items-container__win-loose-item');
const resultsMenuTimeItem = document.querySelector('.items-container__time-item');
const resultsMenuOpenedCardsItem = document.querySelector('.done-levels');
const resultsMenuDoneCardsItem = document.querySelector('.items-container__done-levels-item');
const resultsMenuWinLooseIcon = document.querySelector('.items-container__win-loose-icon');
const resultsMenuIqItem = document.querySelector('.items-container__iq-item');
const resultsMenuExpItem = document.querySelector('.items-container__exp-item');

let allButtonsStyle = document.querySelectorAll('.game-buttons-container__button');//кнопки-квадратики 
let ButtonsStyleGreen = document.querySelector('.game-buttons-container__button-green');
let button1 = document.querySelector('.button1');
let lvlCounterText = document.querySelector('.lvl-counter');
let lvlCounter = 1;
let numberButtonFofLvls = 3;//с учетом нуля 3
let pressButtons = [];
let ButtonValue = [];
let rightWrongAnswer;
let nextLvl = 2;
let DelLastElemPressBtn = 0;
let newRandCount = 1;
let iterationLoopCount = 3;
let deadeLine = document.querySelector(".deadeLine");
let arrayRandomNumbers = [];//массив рандобных чисел для блоков без повторения


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



game();
function game() {

   showCards();

   //линия времени 
   function getId(id) {
      return document.getElementById(id);
   }

   function changesLvlCounter() {
      if (rightWrongAnswer == true) {
         console.log('тру говорит');
         for (let i = 0; i < 3; i++) {
            allButtonsStyle[ButtonValue[i]].style = 'background-color:green;';

         }
         setInterval(() => {//убирает зелёный цвет через время
            for (let i = 0; i < 3; i++) {
               allButtonsStyle[pressButtons[i]].style = 'background-color:#fff;';
            }
         }, 1000);

         nextLvl++;
         deadeLine.style = "animation-play-state: paused ";
         console.log(ButtonValue)

      }
      else {
         console.log('в ответе фолс пишет')
         for (let i = 0; i < 3; i++) {
            allButtonsStyle[pressButtons[i]].classList.add('game-buttons-container__button-red');
            setInterval(showMessageLoose, 1000);
         }


      }
   }

   function startDeadeLine() {
      deadeLine.style = "animation: deadeLine 5s linear ";
   }


   function checkEcualPressAndValueBttn(arr1, arr2) {//сравнивает массивы 

      if (DelLastElemPressBtn == 2) {
         pressButtons.pop();
         console.log('Удалён элем')
         console.log(pressButtons);
      }
      rightWrongAnswer = arr1.sort().toString() == arr2.sort().toString();//сортирует массивы и сравнивает

   }

   function checkLengthPressButtons() {
      if (pressButtons.length === numberButtonFofLvls) {
         DelLastElemPressBtn++;
         numberButtonFofLvls = 9;
         checkEcualPressAndValueBttn(pressButtons, ButtonValue);
         changesLvlCounter();
         showCards();
      }
   }


   //при нажатии на кнопки в игре 
   for (let elem of allButtonsStyle)//перебирает колекцию по элементам
      elem.onclick = function () {
         checkLengthPressButtons();
         elem.classList.add('activated-button');
      }

   //анимация проигриша 
   function showMessageLoose() {
      victoryLooseScreenContainer.style = 'display:flex;';
      victoryLooseScreenWinLooseText.innerHTML = 'Поражение!'
      victoryLooseScreenWinLooseText.classList.add('loose-text-red');
      resultsMenuWinLooseItem.innerHTML = 'Поражение!'
      resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-red');
      resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-down-outline"></ion-icon>';
      resultsMenuOpenedCardsItem.innerHTML = `${lvlCounter}`;
      resultsMenuDoneCardsItem.classList.add('items-container__done-levels-item-red');
   }
   deadeLine.addEventListener("animationend", showMessageLoose);

   victoryLooseScreenResultsButton.onclick = function () {
      resultsMenuContainer.style = 'display:block;'
   }

   function showCards() {
      //выдаёт рандомнst кнопки по лвлам //!НУЖНО ОПТИМИЗИРОВАТЬ
      const range = 15;
      const count = 15;      // кол-во требуемых чисел
      let m = {};

      for (let i = 0; i < count; ++i) {
         let r = Math.floor(Math.random() * (range - i));
         arrayRandomNumbers.push(((r in m) ? m[r] : r) + 1);
         let l = range - i - 1;
         m[r] = (l in m) ? m[l] : l;
      }

      let arrElem = document.querySelectorAll('.game-buttons-container__button');
      let arrayElem = [];
      const result = [];
      //показывает индекс нажатого элем
      for (let i = 0; i < arrElem.length; i++) {
         arrayElem.push(arrElem[i]);
         arrElem[i].addEventListener('click', function (e) {
            pressButtons.push(arrayElem.indexOf(e.target));//записывает индекс в массив
            console.log('pressButton')
            console.log(pressButtons)
         });
      }


      checkLvlCounter();
      function checkLvlCounter() {
         //Lvl 1 и т.д

         for (; lvlCounter < nextLvl; lvlCounter++) {


            lvlCounterText.innerHTML = `${lvlCounter}`;
            for (let i = 0; i < iterationLoopCount; i++) {
               ButtonValue.push(arrayRandomNumbers[i]);
            }
            //выводит рандомные блоки на экран
            for (let i = 0; i < iterationLoopCount; i++) {
               allButtonsStyle[arrayRandomNumbers[i]].classList.add('activated-button');
            }

            setTimeout(() => {//убирает ранд блоки с экрана
               for (let i = 0; i < iterationLoopCount; i++) {
                  allButtonsStyle[arrayRandomNumbers[i]].classList.remove('activated-button');
               }

               startDeadeLine();
               iterationLoopCount += 3;
            }, 3000);



         }
         //lvl 2
         // if (lvlCounter == 2) {
         //    setInterval(() => {
         //       lvlCounterText.innerHTML = '2';

         //       for (let i = 0; i < 3; i++) {//присваивает рандомные кнопки
         //          ButtonValue.push(arrayRandomNumbers[i]);
         //       }
         //выводит рандомные блоки на экран
         //       for (let i = 0; i < 3; i++) {
         //          allButtonsStyle[arrayRandomNumbers[i]].classList.add('activated-button');
         //       }

         //       setTimeout(() => {//убирает ранд блоки с экрана
         //          for (let i = 0; i < 3; i++) {
         //             allButtonsStyle[arrayRandomNumbers[i]].classList.remove('activated-button');
         //          }

         //          startDeadeLine();
         //       }, 3000);
         //    }, 2000);


         // }
         //}



         console.log('buttnValue');
         console.log(ButtonValue);



      }


      //анимация проигриша
      //    function showMessage() {
      //       looseTab.style = 'visibility:visible;';
      //       audioFaile.play();
      //    }
      //    deadeLine.addEventListener("animationend", showMessage);
      // }

   }
}
