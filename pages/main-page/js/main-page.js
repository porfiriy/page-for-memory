'use strict'
const list = document.querySelectorAll('.list')
const itemHomeNavigation = document.querySelector('.list-home');
const itemHomeTextNavigation = document.querySelector('.text-list-item');
const itemGamesNavigation = document.querySelector('.list-games');
const itemAchievmentsNavigation = document.querySelector('.list-achievements');
const containerGamesPage = document.querySelector('.page-games-container');
const containerAchievmentsPage = document.querySelector('.page-achievments-container');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  itemHomeNavigation.classList.remove('home-active-again');//нужно для того чтобы сбросить стили у элемента home при нажатии любого другого
  itemHomeTextNavigation.classList.remove('text-active', 'text-active-again');
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));


itemHomeNavigation.onclick = function () {//при нажатии на элем home в меню навигац
  itemHomeTextNavigation.classList.add('text-active-again');
  itemHomeNavigation.classList.add('home-active-again');
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerAchievmentsPage.style = 'display: none;';
}

itemGamesNavigation.onclick = function () { //при нажатии на кнопку Games
  containerGamesPage.style = 'display: block;';
  containerAchievmentsPage.style = 'display: none;';//убирает страницу игр
}

itemAchievmentsNavigation.onclick = function () { //при нажатии на кнопку Achievments
  containerAchievmentsPage.style = 'display: block;';
}