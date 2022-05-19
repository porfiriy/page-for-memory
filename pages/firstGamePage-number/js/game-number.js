'use strict'

let audioClick = new Audio('/page-for-memory/sound/button-sound.mp3');

const BUTTON = document.querySelector('.num');
BUTTON.onclick = function () {
   BUTTON.classList.add('activated');
   if (BUTTON.classList.contains('activated')) {
      audioClick.play();
   }
}