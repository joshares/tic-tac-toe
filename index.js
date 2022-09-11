// 'use strict;'

const playerX = document.querySelector('.player-x')
const playerO = document.querySelector('.player-o')
const intro = document.querySelector('.intro')
const start = document.querySelector('.start')
const end = document.querySelector('.end')
const five = document.querySelector('.five')
const nine = document.querySelector('.nine')
const osTurn = document.querySelector('.o-turn')
const xsTurn = document.querySelector('.x-turn')
const cells = document.querySelectorAll('.tick')
const done = document.querySelector('.done')
const replay = document.querySelector('.replay')
const oT =document.querySelector('.o-turn')
const xT =document.querySelector('.x-turn')


let x,o;
const xTurn = 'X'
const oTurn = 'O'
let activePlayer = oTurn
let a = ''
let b = ''
let c = ''
let d =''
let f=''
let i =''
let e =''
let g =''
let h =''

osTurn.addEventListener('click',function() {
  activePlayer = oTurn
})
// start

playerX.addEventListener('click', function() {
 x = true
 
 display()
})
playerO.addEventListener('click', function() {
 o = true
 display()
})

// display game

const display = function() {
 if(x === true && o === true){
   console.log(x,o)
    intro.classList.add('hidden')
 start.classList.remove('hidden')
 end.classList.add('hidden')
 }
}

// switchPlayers

const switchPlayers = function(){
  activePlayer = activePlayer === xTurn ? oTurn : xTurn ;
  if(activePlayer === oTurn){
    oT.classList.add('blur')
    xT.classList.remove('blur')
  }else if (activePlayer === xTurn){
    oT.classList.remove('blur')
    xT.classList.add('blur')
  }
}

// endGame
const endGame = function(){
  intro.classList.add('hidden')
 start.classList.add('hidden')
 end.classList.remove('hidden')
 if(activePlayer === oTurn){
  done.innerHTML = '<h4>player O won the game</h4>'
 }else if(activePlayer === xTurn) {
   done.innerHTML = '<h4>player X won the game</h4>'
 }
}

const draw = function() {
  intro.classList.add('hidden')
 start.classList.add('hidden')
 end.classList.remove('hidden')
 done.innerHTML = '<h4>A Draw</h4>'
}



// main game function

cells.forEach((cell) => {
  cell.addEventListener('click', function(){
    switchPlayers()
  cell.innerHTML = `<h1>${activePlayer}</h1>`
   a = cells[0].textContent
   b = cells[1].textContent
   c = cells[2].textContent
   d = cells[3].textContent
   e = cells[4].textContent
   f = cells[5].textContent
   g = cells[6].textContent
   h = cells[7].textContent
   i = cells[8].textContent
    console.log(a, b, c)
    if(a === b && b === c && a !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} 
    if(a === d && d === g && a !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} 
    if(d === e && e === f && d !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} 
    if(b === e && e === h && b !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} 
    if(g === h && h === i && g !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
}
    if(c === f && f === i && c !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} 
    if(a === e && e === i && a !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
}
    if(c === e && e === g && c !== ''){
  console.log('winner')
  setInterval(endGame, 1000);
} if(a !== '' && b !== '' && c !== '' && d !== '' && e !== '' && f !== '' && g !== '' && h !== '' && i !== '' ){
  draw();
}
else{
  return
}
});
});




