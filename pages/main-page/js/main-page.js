'use strict'
//звук 
let audioClick = new Audio('/page-for-memory/pages/main-page/sounds/mixkit-modern-click-box-check-1120.wav');
let audioSwap = new Audio('/page-for-memory/pages/main-page/sounds/25d7ee378d6addc.mp3');
const list = document.querySelectorAll('.list')
const itemHomeNavigation = document.querySelector('.list-home');
const itemHomeTextNavigation = document.querySelector('.text-list-item');
const itemGamesNavigation = document.querySelector('.list-games');
const itemStoreNavigation = document.querySelector('.list-store');
const itemAnalyticNavigation = document.querySelector('.list-analytic');
const itemAchievmentsNavigation = document.querySelector('.list-achievements');
const containerGamesPage = document.querySelector('.page-games-container');
const containerAchievmentsPage = document.querySelector('.page-achievments-container');
const containerStorePage = document.querySelector('.page-store-container');
const containerEverydayTasks = document.querySelector('.everyday-tasks-container');
const containerAnalyticPage = document.querySelector('.analytic-container');
const containerGrayBackground = document.querySelector('.gray-background-container');
const everydayTasksButton = document.querySelector('.everyday-tasks-button');
const everydayTasksCloseButton = document.querySelector('.evaery-day-tasks-close-button');
const wordDayContainer = document.querySelector('.day-word-container');
const wordDayCloseButton = document.querySelector('.word-day-close-button');
const wordDayButton = document.querySelector('.everyday-word-button');
const settingsButton = document.querySelector('.settings')


function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  itemHomeNavigation.classList.remove('home-active-again');//нужно для того чтобы сбросить стили у элемента home при нажатии любого другого
  itemHomeTextNavigation.classList.remove('text-active', 'text-active-again');
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));

//Дом
itemHomeNavigation.onclick = function () {//при нажатии на элем home в меню навигац
  itemHomeTextNavigation.classList.add('text-active-again');
  itemHomeNavigation.classList.add('home-active-again');
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioSwap.play();
}

//Игры
itemGamesNavigation.onclick = function () { //при нажатии на кнопку Games
  containerGamesPage.style = 'display: block;';
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioSwap.play();
}

//Достижения
itemAchievmentsNavigation.onclick = function () { //при нажатии на кнопку Achievments
  containerAchievmentsPage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioSwap.play();
}

//Магазин
itemStoreNavigation.onclick = function () { //при нажатии на кнопку Store
  containerStorePage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerAchievmentsPage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioSwap.play();
}

//Аналитика
itemAnalyticNavigation.onclick = function () {
  containerAnalyticPage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  audioSwap.play();
}
everydayTasksButton.onclick = function () { //при нажатии на кнопку ежедневки
  containerEverydayTasks.style = 'display: block;';
  containerGrayBackground.style = 'display: block;';
  audioClick.play();
}
everydayTasksCloseButton.onclick = function () {
  containerEverydayTasks.style = 'display: none;';
  containerGrayBackground.style = 'display: none;';
  wordDayContainer.style = 'display: none;';
  audioClick.play();
}
wordDayCloseButton.onclick = function () {
  containerGrayBackground.style = 'display: none;';
  wordDayContainer.style = 'display: none;';
  audioClick.play();
}
wordDayButton.onclick = function () {
  wordDayContainer.style = 'display: block;';
  containerGrayBackground.style = 'display: block;';
  audioClick.play();
}
settingsButton.onclick = function (){
	audioClick.play();
}

function getSum(a, b) {
  if (a == b) {
    return a;
  }
  else if (a < 0) {
    while (b !== 0) {
      console.log(a += b--);
    }
  }
  else if (b < 0) {

    console.log(a + b);

  }
  else {
    console.log(a + b);
  }

}
getSum(511, 506);