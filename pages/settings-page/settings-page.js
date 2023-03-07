'use strict'
const Devs = document.querySelector('.developers-button');
const DevsList = document.querySelector('.developers-container_body');
const containerGrayBackground = document.querySelector('.gray-background-container');
const Close = document.querySelector('.close');
const AboutUs = document.querySelector('.about-us-container');
const AboutButton = document.querySelector('.about');
const CloseAboutUs = document.querySelector('.close-about-us');
Devs.onclick = function () { //при нажатии на кнопку
	DevsList.style = 'display: block;';
	containerGrayBackground.style = 'display: block;';
}

Close.onclick = function () {
	DevsList.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}

AboutButton.onclick = function () {
	AboutUs.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}

CloseAboutUs.onclick = function () {
	AboutUs.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}