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

let arrElem = document.querySelectorAll('.game-buttons-container__button');//кнопки-квадратики 
let ButtonsStyleGreen = document.querySelector('.game-buttons-container__button-green');
let button1 = document.querySelector('.button1');
let lvlCounterText = document.querySelector('.lvl-counter');
let lvlCounter = 1;
let numberButtonFofLvls = 3;//с учетом нуля 3
let pressedButtons = [];
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
   function startDeadeLine() {

      let deadeLine = getId("deadeLine");
      deadeLine.style = "animation: deadeLine 7s linear ";
   }


   function createRandomNumbers() {
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
   }

   showIndexPressedButton();
   function showIndexPressedButton() {
      let arrButton = [];
      //показывает индекс нажатого элем
      for (let i = 0; i < arrElem.length; i++) {
         arrButton.push(arrElem[i]);
         arrElem[i].addEventListener('click', function (e) {
            if (arrElem[i] == 1) {
               console.log('equal')
            }
            pressedButtons.push(arrButton.indexOf(e.target));//записывает индекс в массив
            console.log('pressButton')
            console.log(pressedButtons)
         });
      }
   }


}

