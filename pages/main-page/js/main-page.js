'use strict'
const list = document.querySelectorAll('.list')
const itemHomeNavigation = document.querySelector('.list-home');
const itemHomeTextNavigation = document.querySelector('.text-list-item');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  itemHomeNavigation.classList.remove('list-home');//нужно для того чтобы сбросить стили у элемента home при нажатии любого другого
  itemHomeTextNavigation.classList.remove('text-active');
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));


itemHomeNavigation.onclick = function () {//при нажатии на ллем home в меню навигац
  itemHomeTextNavigation.classList.add('text-active');
}