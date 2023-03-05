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
const resultsMenuTime = document.querySelector('.results-menu__time');
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
let deadeLine = document.querySelector(".deadeLine");


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

   viewCards();
   //считает время с начала игры
   let seconds = 0;
   let minutes = 0;
   function timerGame() {
      let timerID = setInterval(function () {

         seconds += 1;
      }, 1000)
   }


   //линия времени 
   function getId(id) {
      return document.getElementById(id);
   }

   function changesLvlCounter() {
      if (rightWrongAnswer == true) {
         console.log('тру говорит');
         for (let i = 0; i < 3; i++) {
            allButtonsStyle[ButtonValue[i]].style = 'background-color: green;';
         }
         lvlCounter += 1;
      }
      else {
         console.log('в ответе фолс пишет')
         for (let i = 0; i < 3; i++) {
            allButtonsStyle[pressButtons[i]].style = 'background-color: red;';
            showMessageLoose();
         }


      }
   }

   function startDeadeLine() {
      deadeLine.style = "animation: deadeLine 7s linear ";
      timerGame();
   }


   function checkEcualPressAndValueBttn(arr1, arr2) {//сравнивает массивы 
      console.log(ButtonValue);
      console.log(pressButtons);

      rightWrongAnswer = arr1.sort().toString() == arr2.sort().toString();//сортирует массивы и сравнивает
      // let wrongAnswerId = [];
      // let rightAnswer;
      // for (let i = 0; i < arr2.length; i++) {
      //    if (arr1[i] == arr2[i]) {
      //       rightAnswer = true;
      //    } else {
      //       rightAnswer = false;
      //       wrongAnswerId = i;
      //       continue;
      //    }
      // }
      // if (rightAnswer == true) {
      //    console.log('vse verno');
      // } else {
      //    console.log(`oshibka v ${wrongAnswerId}`);
      // }
      // console.log(`sort${pressButtons}`);
      // console.log(`sort${ButtonValue}`)

   }
   function checkLengthPressButtons() {
      if (pressButtons.length === numberButtonFofLvls) {
         console.log("3 ecual");
         checkEcualPressAndValueBttn(pressButtons, ButtonValue);
         changesLvlCounter();
         viewCards();
      }
   }


   //при нажатии на кнопки в игре 
   for (let elem of allButtonsStyle)//перебирает колекцию по элементам
      elem.onclick = function () {
         checkLengthPressButtons();
         elem.classList.add('activated');
         if (elem.classList.contains('activated')) {
            elem.classList.add('activated-button');
         }
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
      resultsMenuTimeItem.classList.add('items-container__time-item-red');
      resultsMenuTime.innerHTML = `${seconds}`;
   }
   deadeLine.addEventListener("animationend", showMessageLoose);

   victoryLooseScreenResultsButton.onclick = function () {
      resultsMenuContainer.style = 'display:block;'
   }

   function viewCards() {

      //выдаёт рандомнst кнопки по лвлам //!НУЖНО ОПТИМИЗИРОВАТЬ
      const range = 15;
      const count = 15;      // кол-во требуемых чисел

      let m = {};
      let arrayRandomNumbers = [];//массив рандобных чисел для блоков без повторения
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
         //Lvl 1
         if (lvlCounter == 1) {
            lvlCounterText.innerHTML = '1';
            for (let i = 0; i < 3; i++) {
               ButtonValue.push(arrayRandomNumbers[i]);
            }
            //выводит рандомные блоки на экран
            for (let i = 0; i < 3; i++) {
               allButtonsStyle[arrayRandomNumbers[i]].classList.add('activated-button');
            }

            setTimeout(() => {//убирает ранд блоки с экрана
               for (let i = 0; i < 3; i++) {
                  allButtonsStyle[arrayRandomNumbers[i]].classList.remove('activated-button');
               }

               startDeadeLine();
            }, 3000);

         }
         //lvl 2
         if (lvlCounter == 2) {
            lvlCounterText.innerHTML = '2';
            for (let i = 0; i < 3; i++) {
               ButtonValue.push(arrayRandomNumbers[i]);
            }
            //выводит рандомные блоки на экран
            for (let i = 0; i < 3; i++) {
               allButtonsStyle[arrayRandomNumbers[i]].classList.add('activated-button');
            }

            setTimeout(() => {//убирает ранд блоки с экрана
               for (let i = 0; i < 3; i++) {
                  allButtonsStyle[arrayRandomNumbers[i]].classList.remove('activated-button');
               }

               startDeadeLine();
            }, 3000);

         }
      }



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

