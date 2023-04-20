let scores, currentScore, activePlayer, gamePlaying; 

init()

// console.log(dice);

// document.querySelector('.current-score').textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('.current-' + activePlayer).innerHTML = 

// document.querySelector('.dice').style.display='none'

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;

//    2.display the result
var diceDOM = document.querySelector('.dice')
diceDOM.style.display = 'block';
diceDOM.src = 'img/dice-' + dice + '.png';

if(dice !==1){
    // add score 
    currentScore += dice
    document.querySelector('#current-' + activePlayer).textContent = currentScore;
} else {
    // Next player
       nextPlayer();   
}

    }
    // 1. Random numbers
   
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){

        scores[activePlayer] += currentScore;

     //update my UI
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
     //check if player won game
     if(scores[activePlayer] >= 20){
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-' + activePlayer + '-sect').classList.add('player-winner');
        document.querySelector('.player-' + activePlayer + '-sect').classList.remove('player-active');
        gamePlaying = false;
     }

     else{
        nextPlayer()
     }
    }
    //adding currentscore to global score
    
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0
    currentScore = 0;

    document.getElementById('current-0').textContent ='0'
    document.getElementById('current-1').textContent ='0'

    document.querySelector('.player-0-sect').classList.toggle('player-active')
    document.querySelector('.player-1-sect').classList.toggle('player-active')
    document.querySelector('.dice').style.display='none'
}


document.querySelector('.btn-new').addEventListener('click', function(){
    init();
})

function init(){
    scores = [0,0]
    activePlayer =0
    currentScore =0
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-sect').classList.remove('player-winner')
    document.querySelector('.player-1-sect').classList.remove('player-winner')
    document.querySelector('.player-0-sect').classList.remove('player-active')
    document.querySelector('.player-1-sect').classList.remove('player-active')
    document.querySelector('.player-0-sect').classList.add('player-active')
    
}