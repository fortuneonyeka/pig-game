'use strict'
//SELECTING ELEMENTS
const score0EL = document.getElementById('score--0')
const score1EL = document.getElementById('score--1')
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const diceImg = document.querySelector('.dice')


score0EL.textContent = 0
score1EL.textContent = 0
// diceImg.style.display = 'none'
diceImg.classList.add('hidden')

