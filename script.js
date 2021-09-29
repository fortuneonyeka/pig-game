'use strict'
//SELECTING ELEMENTS
let score0EL = document.getElementById('score--0')
let score1EL = document.getElementById('score--1')
const current0EL = document.getElementById('current--0')
const current1EL = document.getElementById('current--1')
const btnNewGame = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceImg = document.querySelector('.dice')
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')

//STARTING CONDITION
let currentScore,activePlayer,scores,playing;
score0EL.textContent = 0
score1EL.textContent = 0
diceImg.classList.add('hidden')


 const dice = Math.trunc(Math.random() * 6) + 1

 //SWITCH PLAYER FUNCTION
  const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0
  document.getElementById(`current--${activePlayer}`).textContent = 0 
  currentScore = 0
  player0EL.classList.toggle('player--active');  
  player1EL.classList.toggle('player--active');
}


const reset = () => {
  playing = true
  scores = [0,0]
  currentScore = 0
  score0EL.textContent = 0
  score1EL.textContent = 0
  activePlayer = 0

  document.getElementById(`current--${activePlayer}`).textContent = 0

  //REMOVING PLAYER WINNER CLASS
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
                    //OR
      // player0EL.classList.remove('player--winner')
      // player1EL.classList.remove('player--winner')

      //REMOVING AND REASSIGNING PLAYER ACTIVE CLASS
      player0EL.classList.add('player--active')
      player1EL.classList.remove('player--active')
      diceImg.classList.add('hidden')
 
}

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', () => {
  if (playing) {
    //GENERATE RANDOM DICE ROLL
  const dice = Math.trunc(Math.random() * 6) + 1
 
  //DISPLAY DICE ROLLED
  diceImg.classList.remove('hidden')
  diceImg.src = `dice-${dice}.png`

//CHECK FOR ROLL 1: IF TRUE, SWITCH TO THE NEXT PLAYER
if (dice !== 1) {
  currentScore += dice
  document.getElementById(`current--${activePlayer}`).textContent = currentScore 
  
}else {
  // SWITCH TO NEXT PLAYER
  switchPlayer()
} 
  }
  
})

btnHold.addEventListener('click', () => {
if (playing) {
  //ADD CURRENTSCORE TO TOTAL SCORE
  scores[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  if (scores[activePlayer] >= 20) {
    playing = false
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    diceImg.classList.add('hidden')
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0

 
  }else {
    //SWITCH TO NEXT PLAYER
    switchPlayer()
  }
}
  
  
})

btnNewGame.addEventListener('click', () => {
  reset()
})