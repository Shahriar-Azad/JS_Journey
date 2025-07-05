const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');


let userChoice ;
let computerChoice;
let resultShow;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e)=> {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}));

// possibleChoices.for(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
//     computerChoice = e.target.id.Random()
//     computerChoiceDisplay.innerHTML = computerChoice
// }))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1){
        computerChoice = 'rock'

    }
        if (randomNumber === 2){
        computerChoice = 'paper'

    }
        if (randomNumber === 3){
        computerChoice = 'scissor'

    }

computerChoiceDisplay.innerHTML = computerChoice

}


function generateResult(){

    if(computerChoice === userChoice){
        resultShow = "IT'S A TIE"

    }

        if(computerChoice === 'rock'  && userChoice === 'paper'){
        resultShow = "You win"

    }
            if(computerChoice === 'paper'  && userChoice === 'rock'){
        resultShow = "You lose"

    }
            if(computerChoice === 'paper'  && userChoice === 'scissor'){
        resultShow = "You win"

    }
            if(computerChoice === 'scissor'  && userChoice === 'paper'){
        resultShow = "You lose"

    }
            if(computerChoice === 'rock'  && userChoice === 'scissor'){
        resultShow = "You lose"

    }
            if(computerChoice === 'scissor'  && userChoice === 'rock'){
        resultShow = "You win"

    }

    resultDisplay.innerHTML = resultShow
}