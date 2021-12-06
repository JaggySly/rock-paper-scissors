// Rock Paper Scissors

// Variables 

let userSelection = null;
let compSelection = null;
let userScore = 0;
let compScore = 0;
let userShields = 100;
let enemyShields = 100;
let result = null;
let outcome = null;
let first = null;
let h2 = null;
let restartBtn = null;
let random = null;
let random2 = null;
let r = null;
let compChoice = null;
let userChoice = null;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
// playRound function

function playRound(){
    if(userSelection === 'rock'){
        if (compSelection === 'rock'){
            result = 'Your missiles collided with the enemy\'s missiles! No damage recieved on either side.';
            outcome = 'draw';
        }
        else if (compSelection === 'paper'){
            result = 'Enemy telekinesis inverted your missile projectory! You\'ve taken damage!';
            outcome = 'loss';
            }
        else {
            result = 'Your missiles obliterated enemy virus! Enemy has taken damage! '
            outcome = 'win';
        }
    }
    else if (userSelection=== 'paper'){
        if (compSelection === 'rock'){
            result = 'Your telekinesis inverted enemy\'s missile projectory! Enemy has taken damage!';
            outcome = 'win';
        }
        else if (compSelection === 'paper'){
            result = 'Enemy and user\'s telekinesis cancelled each other out! No damage recieved on either side.';
            outcome = 'draw';
        }
        else {
            result = 'Your telekinesis could not detect incoming enemy virus! You\'ve taken damage!';
            outcome = 'loss';
        }
    }
    else if (userSelection === 'scissors'){
        if (compSelection === 'rock'){
            result = 'Your virus was obliterated by enemy missiles! You\ve taken damage!';
            outcome = 'loss';
        }
        else if (compSelection === 'paper'){
            result = 'Enemy telekinesis could not detect your outgoing virus! Enemy has taken damage!';
            outcome = 'win';
        }
        else {
            result = 'Both yours and the enemy\'s viruses were lost in space! No damage recieved on either side.'
            outcome = 'draw';
        }
    }
    showChoice();
    showResult();
    return outcome;
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
        const header = document.querySelector('.header');
        header.insertBefore(h2, first);
        first.remove();
        restartBtn = document.createElement('button');
        restartBtn.classList.toggle('restart');
        const text2 = document.createTextNode('Restart');
        restartBtn.appendChild(text2);
        const buttons = document.querySelector('.buttons');
        buttons.appendChild(restartBtn);
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
    let myScore = document.querySelector('#userShields');
    let enemyScore = document.querySelector('#enemyShields')
    myScore.innerHTML = userShields + '%';
    enemyScore.innerHTML = enemyShields + '%';
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

// showChoice function
function showChoice(){
    if(userScore === 5 || compScore === 5){
        if(random2 === 5){
            return;
        }
    }
    if(random2 === 5){
        compChoice.remove();
        userChoice.remove();
    }
    let choices = document.querySelector('.choices');
    let instructions = document.querySelector('.instructions')
    compChoice = document.createElement('img');
    userChoice = document.createElement('img');
    if(compSelection === 'rock'){
        compChoice.src = 'icons/missile.png';
    }
    else if(compSelection === 'paper'){
        compChoice.src = 'icons/alien.png';
    }
    else if(compSelection === 'scissors'){
        compChoice.src='icons/virus.png';
    }
    if(userSelection === 'rock'){
        userChoice.src = 'icons/missile.png';
    }
    else if(userSelection === 'paper'){
        userChoice.src = 'icons/alien.png';
    }
    else if(userSelection === 'scissors'){
        userChoice.src='icons/virus.png';
    }
    compChoice.setAttribute("height", "64");
    compChoice.setAttribute("width", "64");
    userChoice.setAttribute("height", "64");
    userChoice.setAttribute("width", "64");
    choices.appendChild(compChoice);
    choices.insertBefore(userChoice, instructions);
    random2 = 5;
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
        enemyShields -= 20;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
        userShields -= 20;
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
        enemyShields -= 20;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
        userShields -= 20;
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
        enemyShields -= 20;
    }
    else if(outcome === 'loss' && compScore < 5 && userScore < 5){
        compScore += 1;
        userShields -= 20;
    }
    showResult();
    showScore();
    gameOver();
});

