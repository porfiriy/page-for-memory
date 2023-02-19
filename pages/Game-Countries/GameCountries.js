"use strict"

let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

let deadeLine = document.getElementById("deadeLine");
let modeOptionsContainer = document.querySelector('.mode-options-container');

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

 function game() {

	//считает время с начала игры
	let seconds = 0;
	let minutes = 0;
	function timerGame() {
	   let timerID = setInterval(function () {
 
		  seconds += 1;
	   }, 1000)
	}
	timerGame();
 
	deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы
}