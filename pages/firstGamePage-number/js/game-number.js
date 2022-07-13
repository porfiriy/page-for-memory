'use strict'
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');
let startRandNumbers = document.querySelector('.random-num-container__number');
let startText = document.querySelector('.random-num-container__text');


/*
let audioClick = new Audio('/page-for-memory/sound/button-sound.mp3');

const BUTTON = document.querySelector('.num');
BUTTON.onclick = function () {
   BUTTON.classList.add('activated');
   if (BUTTON.classList.contains('activated')) {
      audioClick.play();
   }
}
*/


//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();

      startText.style = 'display: block;';
   }
}
