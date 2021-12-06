// Rock Paper Scissors

// Variables 

let userSelection = null;
let compSelection = null;
let userScore = 0;
let compScore = 0;
let result = null;
let outcome = null;
let first = null;
let h2 = null;
let restartBtn = null;
let random = null;
let r = null;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
// playRound function

function playRound(){
    if(userSelection === 'rock'){
        if (compSelection === 'rock'){
            result = 'It\'s a draw!';
            outcome = 'draw';
        }
        else if (compSelection === 'paper'){
            result = 'You Lose! Paper beats Rock!';
            outcome = 'loss';
            }
        else {
            result = 'You win! Rock beats Scissors!'
            outcome = 'win';
        }
    }
    else if (userSelection=== 'paper'){
        if (compSelection === 'rock'){
            result = 'You Win! Paper beats Rock!';
            outcome = 'win';
        }
        else if (compSelection === 'paper'){
            result = 'It\'s a draw!';
            outcome = 'draw';
        }
        else {
            result = 'You Lose! Scissors beats Paper!'
            outcome = 'loss';
        }
    }
    else if (userSelection === 'scissors'){
        if (compSelection === 'rock'){
            result = 'You Lose! Rock beats Scissors!';
            outcome = 'loss';
        }
        else if (compSelection === 'paper'){
            result = 'You win! Scissors beat Paper!';
            outcome = 'win';
        }
        else {
            result = 'It\'s a draw!'
            outcome = 'draw';
        }
    }
    showResult();
}

// computerPlay function 

function computerPlay(){
        let random = Math.floor((Math.random() * 3) + 1);
            if (random === 1){
                compSelection = 'rock';
            }
            else if (random === 2){
                compSelection = 'paper';
            }
            else {
                compSelection = 'scissors';
            }
        return compSelection;
}

// gameOver function

function gameOver(){
    if(userScore === 5 || compScore === 5){
        if(h2 === 5){
            return;
        }
        let text;
        first = document.querySelector('.first');
        h2 = document.createElement('h2');
        h2.classList.toggle('game-over');
        if(userScore === 5){
             text = document.createTextNode('Game Over! You Win!');
        }
        else if(compScore === 5){
             text = document.createTextNode('Game Over! You Lose!');
        }
        h2.appendChild(text);
        const column = document.querySelector('.column');
        column.insertBefore(h2, first);
        first.remove();
        restartBtn = document.createElement('button');
        restartBtn.classList.toggle('restart');
        const text2 = document.createTextNode('Restart');
        restartBtn.appendChild(text2);
        column.insertBefore(restartBtn, paper);
        h2 = 5;
        restart();
        return;
    }
}

// restart function

function restart(){
restartBtn.addEventListener('click', function (){
    location.reload();
})};

// showScore function

function showScore(){
    let myScore = document.querySelector('#myScore');
    let enemyScore = document.querySelector('#enemyScore')
    myScore.innerHTML = userScore;
    enemyScore.innerHTML = compScore;
}

// showResult function

function showResult(){
    if(random === 5){
        r.remove();
    }
    if(userScore === 5 || compScore === 5){
        r.remove();
        return;
    }
    let c = document.querySelector('.column');
    r = document.createElement('p');
    r.classList.toggle('result');
    let textr = document.createTextNode(result);
    r.appendChild(textr);
    c.appendChild(r);
    random = 5;
    
}

// play a round via clicking buttons
showScore();
rock.addEventListener('click', function (){
    userSelection = 'rock';
    gameOver();
    computerPlay();
    playRound();
    if(outcome === 'win' && userScore < 5 && compScore < 5){
        userScore += 1;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
    }
    showResult();
    showScore();
    gameOver();
});
paper.addEventListener('click', function (){
    userSelection = 'paper';
    gameOver();
    computerPlay();
    playRound();
    if(outcome === 'win' && userScore < 5 && compScore < 5){
        userScore += 1;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
    }
    showResult();
    showScore();
    gameOver();
});
scissors.addEventListener('click', function (){
    userSelection = 'scissors';
    gameOver();
    computerPlay();
    playRound();
    if(outcome === 'win' && userScore < 5 && compScore < 5){
        userScore += 1;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
    }
    showResult();
    showScore();
    gameOver();
});

