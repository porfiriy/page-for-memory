'use strict'
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');

//правильные-неправильные ответы
let rightAnswer = 0;
let wrongAnswer = 0;
// переменные с кнопками 
let button1 = document.querySelector('.button-count__1');
let button2 = document.querySelector('.button-count__2');
let button3 = document.querySelector('.button-count__3');
let button4 = document.querySelector('.button-count__4');
let button5 = document.querySelector('.button-count__5');
let button6 = document.querySelector('.button-count__6');
let arrButtons = [button1, button2, button3, button3, button4, button5, button6];
let numbrButtnsForMode;

//переменные с иконками флагов
let SwitzerlandImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/ch.png";
let ArmeniaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/am.png";
let AustriaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/at.png";
let BrazilImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/br.png";
let NorwayImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/no.png";
let BelarusImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/by.png";
let ChinaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/cn.png";
let GermanyImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/de.png";
let DenmarkImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/dk.png";
let EstoniaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/ee.png";
let FinlandImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/fi.png";
let FranceImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/fr.png";
let BritishImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/gb.png";
let GreeceImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/gr.png";
let IsrailImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/il.png";
let IndiaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/in.png";
let ItalyImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/it.png";
let JapanImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/jp.png";
let KoreaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/kr.png";
let KZImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/kz.png";
let LatviaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/lv.png";
let NewZilandImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/nz.png";
let PolandImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/pl.png";
let PortugalImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/pt.png";
let RussianImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/ru.png";
let SwedenImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/se.png";
let SyriaImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/sy.png";
let TurkeyImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/tr.png";
let USAImg = "/page-for-memory/pages/Game-Countries/img/easy-mode/um.png";

let arrCounrysImgEasy = [SwitzerlandImg, ArmeniaImg, AustriaImg, BrazilImg, NorwayImg, BelarusImg, ChinaImg, GermanyImg, DenmarkImg, EstoniaImg, FinlandImg, FranceImg, BritishImg, GreeceImg, IsrailImg, IndiaImg, ItalyImg, JapanImg, KoreaImg, KZImg, LatviaImg];
let arrCounrysTextEasy = ['Швейцария', 'Армения', 'Австрия', 'Бразилия', 'Норвегия', 'Беларусь', 'Китай', 'Германия', 'Денмарк', 'Эстония', 'Финляндия', 'Франция', 'Британия', 'Греция', 'Израиль', 'Индия', 'Италия', 'Япония', 'Корея', 'Казахстан', 'Латвия'];



// меню результатов 
let menuResultsContainer = document.querySelector(".container-results-menu");
let menuResultsRedRectangle = document.querySelector(".box-informations-orange__rectangle-red");
let menuResultsGreenRectangle = document.querySelector(".box-informations-orange__rectangle-green");
let menuResultsCercleProcents = document.querySelector('.box-informations-orange__circle-procent-results');
let menuResultsTimer = document.querySelector(".box-informations-orange__time");

let ModeTimeAnim;
let hardModeButtonsContainer = document.querySelector('.button-hardMode-container');
let arrayRandomNumbers = [];//массив рандобных чисел для блоков без повторения
let flagsBody = document.querySelector(".flags-body-img");
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
const resultsMenuExpItem = document.querySelector('.items-container__exp-item');




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
   numbrButtnsForMode = 4;
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
   numbrButtnsForMode = 4;
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
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 6;
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
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 6;
}
victoryLooseScreenResultsButton.onclick = function () {
   resultsMenuContainer.style = 'display:block;'
}

function randomLoopForArr() {
   const range = 25;//до какого значения ранд числа
   const count = 15;      // кол-во требуемых чисел
   let m = {};

   for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (range - i));
      arrayRandomNumbers.push(((r in m) ? m[r] : r) + 1);
      let l = range - i - 1;
      m[r] = (l in m) ? m[l] : l;
   }
   console.log(arrayRandomNumbers);
}

function showFlags() {
   for (let i = 0; i < 10; i++) {//цикл с изменениями флагов по итерации 
      flagsBody.innerHTML = `<img class="img-country" src="${arrCounrysImgEasy[arrayRandomNumbers[i]]}">`;//добавляет флаг в html
      let randomNumberBtn = Math.floor(Math.random() * numbrButtnsForMode);//рандомная кнопка с правильным ответом
      arrButtons[randomNumberBtn].innerHTML = arrCounrysTextEasy[arrayRandomNumbers[i]];
      let iterCount = 1;
      for (let k = 0; k <= numbrButtnsForMode; k++) {
         if (k == randomNumberBtn) {
            k++;
         }
         iterCount++;
         arrButtons[k].innerHTML = arrCounrysTextEasy[arrayRandomNumbers[iterCount]];
      }
      break;
   }
}




function game() {
   randomLoopForArr();
   showFlags();


   deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы
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