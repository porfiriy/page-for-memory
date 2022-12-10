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
let button1 = document.querySelector('.button1');
let lvlCounterText = document.querySelector('.lvl-counter');
let lvlCounter = 1;

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

function game() {





   //линия времени 
   function getId(id) {
      return document.getElementById(id);
   }

   startDeadeLine();
   function startDeadeLine() {

      let deadeLine = getId("deadeLine");
      deadeLine.style = "animation: deadeLine 8s linear ";
   }

   let arrElem = document.querySelectorAll('.game-buttons-container__button');
   let arrayElem = [];

   for (var i = 0; i < arrElem.length; i++) {
      arrayElem.push(arrElem[i]);
      arrElem[i].addEventListener('click', function (e) {
         console.log(arrayElem.indexOf(e.target))
      });
   }

   //при нажатии на кнопки в игре 
   for (let elem of allButtonsStyle)//перебирает колекцию по элементам
      elem.onclick = function () {
         elem.classList.add('activated');
         if (elem.classList.contains('activated')) {
            elem.classList.add('activated-button');

            console.log(allButtonsStyle)
         }
      }
   //выдаёт рандомно нажвтые кнопки по лвлам //!НУЖНО ОПТИМИЗИРОВАТЬ
   const range = 15;
   const count = 4;      // кол-во требуемых чисел

   let m = {};
   let a = [];
   for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (range - i));
      a.push(((r in m) ? m[r] : r) + 1);
      let l = range - i - 1;
      m[r] = (l in m) ? m[l] : l;
   }
   let ButtonValue1;
   let ButtonValue2;
   let ButtonValue3;
   //Lvl 1
   if (lvlCounter == 1) {
      console.log(m);
      console.log(a);

      allButtonsStyle[ButtonValue1 = a[0]].classList.add('activated-button');
      allButtonsStyle[ButtonValue2 = a[1]].classList.add('activated-button');
      allButtonsStyle[ButtonValue3 = a[2]].classList.add('activated-button');
      setTimeout(() => {
         allButtonsStyle[ButtonValue1 = a[0]].classList.remove('activated-button');
         allButtonsStyle[ButtonValue2 = a[1]].classList.remove('activated-button');
         allButtonsStyle[ButtonValue3 = a[2]].classList.remove('activated-button');
      }, 3000);

   }

   //Lvl 2
   if (lvlCounter == 2) {
      allButtonsStyle[a[0]].classList.add('activated-button');
   }



   function viewCards() {

   }
   viewCards();

   //анимация проигриша 
   function showMessage() {
      looseTab.style = 'visibility:visible;';
      audioFaile.play();
   }
   deadeLine.addEventListener("animationend", showMessage);
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

