'use strict'
const Devs = document.querySelector('.developers-button');
const DevsList = document.querySelector('.developers-container_body');
const containerGrayBackground = document.querySelector('.gray-background-container');
const DevsClose = document.querySelector('.close');

Devs.onclick = function () { //при нажатии на кнопку
	DevsList.style = 'display: block;';
	containerGrayBackground.style = 'display: block;';
}

DevsClose.onclick = function () {
	DevsList.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}