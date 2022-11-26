'use strict'
let audioStart = new Audio('/page-for-memory/sound/start-game.mp3');
let audioClick = new Audio('/page-for-memory/sound/fastSoftClick.mp3');

let startRandNumber1 = document.querySelector('.random-num-container__number');
let startRandNumber2 = document.querySelector('.random-num-container__number2');
let startRandNumber3 = document.querySelector('.random-num-container__number3');
let startRandNumber4 = document.querySelector('.random-num-container__number4');
let startRandNumber5 = document.querySelector('.random-num-container__number5');
let startRandNumber6 = document.querySelector('.random-num-container__number6');
let startRandNumber7 = document.querySelector('.random-num-container__number7');
let startRandNumber8 = document.querySelector('.random-num-container__number8');
let startRandNumber9 = document.querySelector('.random-num-container__number9');
let startRandNumber10 = document.querySelector('.random-num-container__number10');
let startText = document.querySelector('.random-num-container__text');
let startTextGo = document.querySelector('.random-num-container__textGo');
let startRandContainer = document.querySelector('.random-num-container');
let inputNumbers = document.querySelector('.value');
let screenResult = document.querySelector('.screenResult__container');
let screenResultRandomNum = document.querySelector('.screenResult__randomNum-orange');

let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

// let audioClick = new Audio('/page-for-memory/sound/button-sound.mp3');

//при нажатии на отмену вспл окна настройки 
document.querySelector('.pop-up__cancel').onclick = function () {
   settings.style = 'visibility:hidden;';

};
//при нажатии на иконку настроек
document.querySelector('.header__icon-settings').onclick = function () {

   settings.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна назад
document.querySelector('.pop-up__cancel2').onclick = function () {
   comeback.style = 'visibility:hidden;';

};
//при нажатии на иконку назад
document.querySelector('.header__comeback-button').onclick = function () {

   comeback.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна рестарт
document.querySelector('.pop-up__cancel3').onclick = function () {
   restart.style = 'visibility:hidden;';

};
//при нажатии на иконку рестарт
document.querySelector('.header__button-restart').onclick = function () {

   restart.style = 'visibility:visible;';

};



//рандомная генерация чисел
let randomNum = []
for (let i = 0; i < 10; i++) {
   let num = Math.floor(Math.random() * 10)
   randomNum.push(num)
}
console.log(randomNum)


//вывод элементов массива(повторение в виде отдельных функций т.к не смог реализовать цикл. ОБЯЗАТЕЛЬНО ОПТИМИЗИРОВАТЬ!)
function printRandomNum() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber1.style = 'display: none;';
   }
   startRandNumber1.style = 'display: block;';
   startRandNumber1.innerHTML = randomNum[0];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum2() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber2.style = 'display: none;';
   }
   startRandNumber2.style = 'display: block;';
   startRandNumber2.innerHTML = randomNum[1];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum3() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber3.style = 'display: none;';
   }
   startRandNumber3.style = 'display: block;';
   startRandNumber3.innerHTML = randomNum[2];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum4() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber4.style = 'display: none;';
   }
   startRandNumber4.style = 'display: block;';
   startRandNumber4.innerHTML = randomNum[3];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum5() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber5.style = 'display: none;';
   }
   startRandNumber5.style = 'display: block;';
   startRandNumber5.innerHTML = randomNum[4];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum6() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber6.style = 'display: none;';
   }
   startRandNumber6.style = 'display: block;';
   startRandNumber6.innerHTML = randomNum[5];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum7() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber7.style = 'display: none;';
   }
   startRandNumber7.style = 'display: block;';
   startRandNumber7.innerHTML = randomNum[6];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum8() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber8.style = 'display: none;';
   }
   startRandNumber8.style = 'display: block;';
   startRandNumber8.innerHTML = randomNum[7];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum9() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber9.style = 'display: none;';
   }
   startRandNumber9.style = 'display: block;';
   startRandNumber9.innerHTML = randomNum[8];
   setTimeout(delateRandNum, 3000)
}
function printRandomNum10() {
   //удаление элемента после показа
   function delateRandNum() {
      startRandNumber10.style = 'display: none;';
   }
   startRandNumber10.style = 'display: block;';
   startRandNumber10.innerHTML = randomNum[9];
   setTimeout(delateRandNum, 3000)
}
//удаление окна с рандомными числами
function closeRandWindow() {
   startRandContainer.style = 'display:none;'

}
function pritnTextGo() {
   startTextGo.style = 'display:block;'
}

//принимаем данные введённые пользователем и выводим результат
function inputResult() {
   // функция ниже предотвращает перезагрузку страницы при нажатии на кнопку ОТПРАВИТЬ
   event.preventDefault();
   screenResult.style = 'display: block;'
   screenResultRandomNum.innerHTML = randomNum;

   //получаю данные в эту переменную которые пользователь ввёл 
   let test = [1];

   let inputedUserValue = [document.getElementById('input').value];
   // пытаюсь преобразовать строку в массив 
   let arr = JSON.parse(inputedUserValue);
   console.log(arr);

   //подсветка неверно введённых цифр в меню результатов
   if (inputedUserValue == test) {
      console.log('вы победили');
   }
   else {
      console.log(typeof ('no'));
   }


}



//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();
      //включение анимации с текстом'ЗАПОМНИ"
      startText.style = 'display: block;';
      //включение рандомных цифр с задержкой

      setTimeout(printRandomNum, 3000)
      setTimeout(printRandomNum2, 5000)
      setTimeout(printRandomNum3, 7000)
      setTimeout(printRandomNum4, 9000)
      setTimeout(printRandomNum5, 11000)
      setTimeout(printRandomNum6, 13000)
      setTimeout(printRandomNum7, 15000)
      setTimeout(printRandomNum8, 17000)
      setTimeout(printRandomNum9, 19000)
      setTimeout(printRandomNum10, 21000)
      setTimeout(pritnTextGo, 23000)
      setTimeout(closeRandWindow, 25000)

   }
}
