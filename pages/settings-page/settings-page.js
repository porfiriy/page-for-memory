'use strict'
const Devs = document.querySelector('.developers-button');
const DevsList = document.querySelector('.developers-container_body');
const containerGrayBackground = document.querySelector('.gray-background-container');
const Close = document.querySelector('.close');
const AboutUs = document.querySelector('.about-us-container');
const AboutButton = document.querySelector('.about');
const CloseAboutUs = document.querySelector('.close-about-us');
const LanguageButton = document.querySelector('.language-button');
const Language = document.querySelector('.language-container');
const CloseLanguage = document.querySelector('.close-language');

Devs.onclick = function () { //Разработчики - при нажатии на кнопку
	DevsList.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}

Close.onclick = function () { //Разработчики - при закрытии
	DevsList.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}

AboutButton.onclick = function () { //О нас - при нажатии на кнопку
	AboutUs.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}

CloseAboutUs.onclick = function () { //О нас - при закрытии
	AboutUs.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}
LanguageButton.onclick = function () { //Язык - при нажатии на кнопку
	Language.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}
CloseLanguage.onclick = function () { //Язык - при закрытии
	Language.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}