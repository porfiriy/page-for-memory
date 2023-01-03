'use strict'
const list = document.querySelectorAll('.list')

function activeLink() {
   list.forEach((item) =>
      item.classList.remove('active'));
   this.classList.add('active');
}
list.forEach((item) =>
   item.addEventListener('click', activeLink));

let iconGameNumbers = document.querySelector('.game-numbers');
console.log(iconGameNumbers);
iconGameNumbers.addEventListener("mousedown", function () {
   console.log('JJBH,');
})