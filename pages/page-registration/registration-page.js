'use strict'

const buttonAuthorisation = document.querySelector('.bttn-authorisation');
const buttonRegistration = document.querySelector('.bttn-registr');
const pgRegistrContainer = document.querySelector('.pg-registr-container');
const pgAuthorisContainer = document.querySelector('.pg-authoris-container');

buttonAuthorisation.onclick = function () {
   pgRegistrContainer.style = 'display:none;';
   pgAuthorisContainer.style = 'display:flex;';
}
buttonRegistration.onclick = function () {
   pgAuthorisContainer.style = 'display:none;';
   pgRegistrContainer.style = 'display:flex;';
}