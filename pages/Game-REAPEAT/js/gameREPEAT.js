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

let allButtonsStyle = document.querySelectorAll('.game-buttons-container__button');//кнопки-квадратики 
let ButtonsStyleGreen = document.querySelector('.game-buttons-container__button-green');
let button1 = document.querySelector('.button1');
let lvlCounterText = document.querySelector('.lvl-counter');
let lvlCounter = 1;
let numberButtonFofLvls = 3;//с учетом нуля 3
let pressButtons = [];
let ButtonValue = [];
let rightWrongAnswer;


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
   //линия времени 
   function getId(id) {
      return document.getElementById(id);
   }

   function changesLvlCounter() {
      if (rightWrongAnswer == true) {
         console.log('тру говорит');
         allButtonsStyle[ButtonValue[0]].style = 'background-color: green;';
         allButtonsStyle[ButtonValue[1]].style = 'background-color: green;';
         allButtonsStyle[ButtonValue[2]].style = 'background-color: green;';
         lvlCounter += 1;
      }
      else {
         console.log('в ответе фолс пишет')
         allButtonsStyle[pressButtons[0]].style = 'background-color: red;';

      }
   }

   function startDeadeLine() {

      let deadeLine = getId("deadeLine");
      deadeLine.style = "animation: deadeLine 7s linear ";
   }


   function checkEcualPressAndValueBttn(arr1, arr2) {//сравнивает массивы 
      console.log(ButtonValue);
      console.log(pressButtons);
      rightWrongAnswer = pressButtons.sort().toString() == ButtonValue.sort().toString();//сортирует массивы и сравнивает


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
            ButtonValue.push(arrayRandomNumbers[0]);
            ButtonValue.push(arrayRandomNumbers[1]);
            ButtonValue.push(arrayRandomNumbers[2]);
            //выводит рандомные блоки на экран
            allButtonsStyle[arrayRandomNumbers[0]].classList.add('activated-button');
            allButtonsStyle[arrayRandomNumbers[1]].classList.add('activated-button');
            allButtonsStyle[arrayRandomNumbers[2]].classList.add('activated-button');

            setTimeout(() => {//убирает ранд блоки с экрана
               allButtonsStyle[arrayRandomNumbers[0]].classList.remove('activated-button');
               allButtonsStyle[arrayRandomNumbers[1]].classList.remove('activated-button');
               allButtonsStyle[arrayRandomNumbers[2]].classList.remove('activated-button');
               startDeadeLine();
            }, 3000);

         }
         //lvl 2
         if (lvlCounter == 2) {
            lvlCounterText.innerHTML = '2';
            ButtonValue.push(arrayRandomNumbers[0]);
            ButtonValue.push(arrayRandomNumbers[1]);
            ButtonValue.push(arrayRandomNumbers[2]);
            //выводит рандомные блоки на экран
            allButtonsStyle[arrayRandomNumbers[0]].classList.add('activated-button');
            allButtonsStyle[arrayRandomNumbers[1]].classList.add('activated-button');
            allButtonsStyle[arrayRandomNumbers[2]].classList.add('activated-button');

            setTimeout(() => {//убирает ранд блоки с экрана
               allButtonsStyle[arrayRandomNumbers[0]].classList.remove('activated-button');
               allButtonsStyle[arrayRandomNumbers[1]].classList.remove('activated-button');
               allButtonsStyle[arrayRandomNumbers[2]].classList.remove('activated-button');
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

