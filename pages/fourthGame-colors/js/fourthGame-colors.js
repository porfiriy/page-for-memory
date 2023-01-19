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
let timerBoxMinutes = document.querySelector(".container-timer__box-minutes");
let timerBoxSeconds = document.querySelector(".container-timer__box-seconds");
//счётчик пройденных фигур(по нажатию на кнопки)
let varCounterClickButtons = 0;
let counterChangeSymbol = document.querySelector(".counter-complited__number");

//правильные-неправильные ответы
let rightAnswer = 0;
let wrongAnswer = 0;

// меню результатов 
let menuResultsContainer = document.querySelector(".container-results-menu");
let menuResultsRedRectangle = document.querySelector(".box-informations-orange__rectangle-red");
let menuResultsGreenRectangle = document.querySelector(".box-informations-orange__rectangle-green");
let menuResultsCercleProcents = document.querySelector('.box-informations-orange__circle-procent-results');
let menuResultsTimer = document.querySelector(".box-informations-orange__time");

let ModeTimeAnim;
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
   ModeTimeAnim = '25';
   startButtonContainer.style = 'display: block;'
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
   ModeTimeAnim = '20';
   startButtonContainer.style = 'display: block;'
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
   ModeTimeAnim = '15';
   startButtonContainer.style = 'display: block;'
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
   ModeTimeAnim = '10';
   startButtonContainer.style = 'display: block;'
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

// //считает время с начала игры
// let seconds = 0;
// let minutes = 0;
// function timerGame() {
//    let timerID = setInterval(function () {

//       timerBoxMinutes.innerHTML = `${minutes}`;//выводит на экран пользователю
//       timerBoxSeconds.innerHTML = `${seconds}`;
//       seconds += 1;
//       if (seconds == 60) {
//          minutes += 1;
//          seconds = 0;
//       }
//    }, 1000)
// }



//красит в рандомный цвет фигуру из массива и вставляет в фигуру новый текст с названием цвета
function randomColorRectangle() {
   rectangleColor.style = `background:${arrayColorsRectangle[randomNumRectangle]};`;
   rectangleText.innerHTML = arrayColorsText[randomNumText];
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
   if (varCounterClickButtons !== 20) {
      timerGame();
   }

   deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы

   //анимация проигриша 
   function showMessage() {
      deadeLine.style = "animation-play-state: paused ";
      victoryLooseScreenContainer.style = 'display:flex;';
      victoryLooseScreenWinLooseText.innerHTML = 'Поражение!'
      victoryLooseScreenWinLooseText.classList.add('loose-text-red');
      resultsMenuWinLooseItem.innerHTML = 'Поражение!';
      resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-red');
      resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-down-outline"></ion-icon>';
      resultsMenuOpenedCardsItem.innerHTML = `${rightAnswer}`;
      resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-red');
      resultsMenuTimeItem.classList.add('items-container__time-item-red');
      resultsMenuTime.innerHTML = `${seconds}`;
   }
   deadeLine.addEventListener("animationend", showMessage);

   //вывод в меню результатов все данных
   function openMenuResults() {
      if (rightAnswer == 20) {//при победе
         deadeLine.style = "animation-play-state: paused ";
         victoryLooseScreenContainer.style = 'display:flex;';
         victoryLooseScreenWinLooseText.innerHTML = 'Победа!'
         victoryLooseScreenWinLooseText.classList.add('victory-text-green');
         resultsMenuWinLooseItem.innerHTML = 'Победа!'
         resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-green');
         resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-up-outline"></ion-icon>';
         resultsMenuOpenedCardsItem.innerHTML = '20';
         resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-green');
         resultsMenuTimeItem.classList.add('items-container__time-item-green');
         resultsMenuTime.innerHTML = `${seconds}`;
         resultsMenuIqItem.innerHTML = '+50';
      }
      else if (varCounterClickButtons == 20 && wrongAnswer > 0) {
         showMessage();
      }
   }

   randomColorRectangle();

   //выводит переменную с количеством пройденных фигур 
   function FuncCounterComplited() {
      counterChangeSymbol.innerHTML = varCounterClickButtons;
      openMenuResults();//функция которая смотрит на количество открытых карт и выводит менюрезультатов 
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




//    //выодит проценты правильных ответов
//    if (rightAnswer == 0) {
//       menuResultsCercleProcents.innerHTML = "0%";
//       menuResultsCercleProcents.style = "color: #FF0000;";
//    }
//    else if (rightAnswer == 2 || rightAnswer == 3) {
//       menuResultsCercleProcents.innerHTML = "10%";
//       menuResultsCercleProcents.style = "color: #ee470b;";
//    }
//    else if (rightAnswer == 4 || rightAnswer == 5) {
//       menuResultsCercleProcents.innerHTML = "20%";
//       menuResultsCercleProcents.style = "color: #ee470b;";
//    }
//    else if (rightAnswer == 6 || rightAnswer == 7) {
//       menuResultsCercleProcents.innerHTML = "30%";
//       menuResultsCercleProcents.style = "color: #ee9e0b;";
//    }
//    else if (rightAnswer == 8 || rightAnswer == 9) {
//       menuResultsCercleProcents.innerHTML = "40%";
//       menuResultsCercleProcents.style = "color: #ee9e0b;";
//    }
//    else if (rightAnswer == 10) {
//       menuResultsCercleProcents.innerHTML = "50%";
//       menuResultsCercleProcents.style = "color: #aeee0b;";
//    }
//    else if (rightAnswer == 11 || rightAnswer == 12) {
//       menuResultsCercleProcents.innerHTML = "60%";
//       menuResultsCercleProcents.style = "color: #62ee0b;";
//    }
//    else if (rightAnswer == 13 || rightAnswer == 14) {
//       menuResultsCercleProcents.innerHTML = "70%";
//       menuResultsCercleProcents.style = "color: #38ee0b;";
//    }
//    else if (rightAnswer == 15 || rightAnswer == 16) {
//       menuResultsCercleProcents.innerHTML = "80%";
//       menuResultsCercleProcents.style = "color: #38ee0b;;";
//    }
//    else if (rightAnswer == 17 || rightAnswer == 18 || rightAnswer == 19) {
//       menuResultsCercleProcents.innerHTML = "90%";
//       menuResultsCercleProcents.style = "color: #38ee0b;";
//    }
//    else if (rightAnswer == 20) {
//       menuResultsCercleProcents.innerHTML = "100%";
//       menuResultsCercleProcents.style = "color: #22ee0b;";
//    }

// }
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

