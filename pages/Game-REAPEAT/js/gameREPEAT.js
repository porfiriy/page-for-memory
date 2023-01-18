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
let numberButtonFofLvls = 2;//с учетом нуля 3
let pressButtons = [];
let ButtonValue = [];


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


function checkEcualPressAndValueBttn(arr1, arr2) {//сравнивает массивы 
   console.log(ButtonValue);
   console.log(pressButtons);
   for (let i = 0; i < arr1.length; i++) {
      for (let k = 0; k < arr2.length; k++) {

         if (arr1[i] == arr2[k]) {
            let results;
            results += 1;
            if (results == numberButtonFofLvls) {
               console.log('массивы равны');
            }
         }

      }
   }


}
function checkLengthPressButtons() {
   if (pressButtons.length === numberButtonFofLvls) {
      console.log("3 ecual");
      checkEcualPressAndValueBttn(pressButtons, ButtonValue);
   }
}

game();
function game() {

   //линия времени 
   function getId(id) {
      return document.getElementById(id);
   }


   function startDeadeLine() {

      let deadeLine = getId("deadeLine");
      deadeLine.style = "animation: deadeLine 8s linear ";
   }
   startDeadeLine();



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


      //Lvl 1
      if (lvlCounter == 1) {
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
         }, 3000);



      }

      console.log('buttnValue');
      console.log(ButtonValue);

      //Lvl 2
      if (lvlCounter == 2) {
         allButtonsStyle[a[0]].classList.add('activated-button');
      }

   }
   viewCards();

   //анимация проигриша
   //    function showMessage() {
   //       looseTab.style = 'visibility:visible;';
   //       audioFaile.play();
   //    }
   //    deadeLine.addEventListener("animationend", showMessage);
   // }

}

