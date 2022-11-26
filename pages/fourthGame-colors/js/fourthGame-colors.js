"use strict"

//звук
let audioComplete = new Audio('/page-for-memory/sound/successfull2.mp3');
let audioVictory = new Audio('/page-for-memory/sound/successfull.mp3');
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');
let audioFaile = new Audio('/page-for-memory/sound/faile.mp3');
let audioClick = new Audio('/page-for-memory/sound/fastSoftClick.mp3');


let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

let rectangleColor = document.querySelector(".rectangle");
let rectangleText = document.querySelector(".rectangle__text");
let redButton = document.querySelector(".button_red");
let greenButton = document.querySelector(".button_green");

//переменные с рандомными цветами
let arrayColorsRectangle = ['#740ad0', '#17d00a', '#0a56d0', '#d00a2e'];
let arrayColorsText = ["Фиолетовый", "Зелёный", "Синий", "Красный"];

//создаёт рандомное число для цвета фигуры
let randomNumRectangle = Math.floor(Math.random() * 4);
let randomNumText = Math.floor(Math.random() * 4);
//таймер
let timer = document.querySelector(".timer");
//счётчик пройденных фигур(по нажатию на кнопки)
let varCounterClickButtons = 0;
let counterChangeSymbol = document.querySelector(".counter-complited__number");

//правильные-неправильные ответы
let rightAnswer = 0;
let wrongAnswer = 0;
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
//считает время с начала игры
function timerGame() {
   let seconds = 0;
   let minutes = 0;
   setInterval(function () {

      timer.innerHTML = `0${minutes}:${seconds}`;//выводит на экран пользователю
      seconds += 1;
      if (seconds == 60) {
         minutes += 1;
         seconds = 0;
      }
   }, 1000)
}

//красит в рандомный цвет фигуру из массива и вставляет в фигуру новый текст с названием цвета
function randomColorRectangle() {

   rectangleColor.style = `background:${arrayColorsRectangle[randomNumRectangle]};`;
   rectangleText.innerHTML = arrayColorsText[randomNumText];
}


function game() {

   randomColorRectangle();
   timerGame();
   //выводит переменную с количеством пройденных фигур 
   function FuncCounterComplited() {
      counterChangeSymbol.innerHTML = varCounterClickButtons;
   }

   //добавляет анимацию тексту
   rectangleText.style = "animation:  rectangle__text 2s;";

   // при нажатии на красную кнопку
   redButton.onclick = function () {
      document.querySelector('.button_red').classList.add('activated');
      redButton.classList.add('activated');
      if (redButton.classList.contains('activated')) {
         audioClick.play();
         //считает нажатие на кнопку(для того что бы понять,сколько фигур было)
         varCounterClickButtons += 1;
         //когда игрок нажал красную,и если он прав,то записываем на счёт,если нет,то записываем что ошибся
         if (randomNumRectangle !== randomNumText) {
            console.log("ты молодец");
            rightAnswer += 1;
         }
         else {
            console.log("непопал");
            wrongAnswer += 1;
         }

         console.log(rightAnswer);
         //запускает генерацию новых цветов

         randomNumRectangle = Math.floor(Math.random() * 4);
         randomNumText = Math.floor(Math.random() * 4);
         randomColorRectangle();
         FuncCounterComplited();
         //начинает анимацию при нажатии на кнопку
      }
   }

   // при нажатии на зелёную кнопку
   greenButton.onclick = function () {
      document.querySelector('.button_red').classList.add('activated');
      greenButton.classList.add('activated');
      if (greenButton.classList.contains('activated')) {
         audioClick.play();
         //считает нажатие на кнопку(для того что бы понять,сколько фигур было)
         varCounterClickButtons += 1;
         if (randomNumRectangle == randomNumText) {
            console.log("ты молодец");
            rightAnswer += 1;
         }
         else {
            console.log("непопал");
            wrongAnswer += 1;
         }

         console.log(rightAnswer);
         //запускаетзаново генерацию новых цветов

         randomNumRectangle = Math.floor(Math.random() * 4);
         randomNumText = Math.floor(Math.random() * 4);
         randomColorRectangle();
         FuncCounterComplited();
      }
   }



}


//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();
      //при нажатии кнопки старт запускается функция game и начинаеться игра
      game();
   }
}

