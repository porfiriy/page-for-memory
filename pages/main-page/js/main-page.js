'use strict'
//звук 
let audioClick = new Audio('/page-for-memory/pages/main-page/sounds/mixkit-modern-click-box-check-1120.wav');
let audioSwap = new Audio('');
let audiomeme = new Audio('/page-for-memory/pages/main-page/sounds/dwayne-sound.mp3')
const list = document.querySelectorAll('.list')
const itemHomeNavigation = document.querySelector('.list-home');
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
const everydayTasksCloseButton = document.querySelector('.every-day-tasks-close-button');
const wordDayContainer = document.querySelector('.day-word-container');
const wordDayCloseButton = document.querySelector('.word-day-close-button');
const wordDayButton = document.querySelector('.everyday-word-button');
const settingsButton = document.querySelector('.settings')
const everydayWordButton = document.querySelector('.everyday_day-word-container');
const everydayWord = document.querySelector('.everyday_word');
const Profile = document.querySelector('.profile')
const everydayWordCloseButton = document.querySelector('.everyday_day-word-close-button');
const everydayDateButton = document.querySelector('.everyday_date-container');
const everydayDateCloseButton = document.querySelector('.everyday_date-close-button');
const everydayNewWordButton = document.querySelector('.everyday_new-word-container');
const everydayNewWordCloseButton = document.querySelector('.everyday_new-word-close-button');
const dayHistoryButton = document.querySelector('.day_history');
const newWordButton = document.querySelector('.new_word');
const AchievmentsScrollButton = document.querySelector('.scroll');
const InfoForTasks = document.querySelector('.info-button-body');
const InfoTasksButton = document.querySelector('.word-day-info-button');
const CloseInfoForTasks = document.querySelector('.close-every-day-tasks-info');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));

//Дом
itemHomeNavigation.onclick = function () {//при нажатии на элем home в меню навигац
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
//поворот нижней кнопки Достижений
/*let arrows = document.getElementsByClassName("scroll");
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function (event) {
    if (this.style.transform == "")
      this.style.transform = "rotate(180deg)";
    else
      this.style.transform = "";
  });
}*/
//Скрипт на скролл у ачивок
AchievmentsScrollButton.onclick = function scrollToDown() {
  document.getElementById('achievments-container').scrollTo(9999, 9999);
}
AchievmentsScrollButton.onclick = function scrollToTop() {
  document.getElementById('achievments-container').scrollTo(0, 0);
};

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
InfoTasksButton.onclick = function () {
	InfoForTasks.style = 'display: flex; z-index:6;';
	containerGrayBackground.style = 'display: block; z-index:5;';
}
CloseInfoForTasks.onclick = function () {
	InfoForTasks.style = 'display: none;';
	containerGrayBackground.style = 'display: block; z-index: 3;';
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
settingsButton.onclick = function () {
  audioClick.play();
}
Profile.onclick = function () {
  audiomeme.play();
}
everydayWord.onclick = function () {
  containerGrayBackground.style = 'display: block;';
  everydayWordButton.style = 'display: block';
}
everydayWordCloseButton.onclick = function () {
  everydayWordButton.style = 'display: none';
}

dayHistoryButton.onclick = function () {
  containerGrayBackground.style = 'display: block;';
  everydayDateButton.style = 'display: block';
}
everydayDateCloseButton.onclick = function () {
  everydayDateButton.style = 'display: none';
}

newWordButton.onclick = function () {
  containerGrayBackground.style = 'display: block;';
  everydayNewWordButton.style = 'display: block';
}
everydayNewWordCloseButton.onclick = function () {
  everydayNewWordButton.style = 'display: none';
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