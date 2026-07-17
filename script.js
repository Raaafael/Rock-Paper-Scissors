let round = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random == 0) {
        return ("rock").toLowerCase()
    } else if (random == 1) {
        return ("paper").toLowerCase()
    } else if (random == 2) {
        return ("scissor").toLowerCase()
    }
    
}

function getHumanChoice() {
    
    const rock = document.querySelector("#rock")

    rock.addEventListener("click", () => {
        const HumanChoice = "rock";
        playRound(HumanChoice, getComputerChoice());
    });

    const paper = document.querySelector("#paper")

    paper.addEventListener("click", () => {
        const HumanChoice = "paper";
        playRound(HumanChoice, getComputerChoice());
    });

    const scissor = document.querySelector("#scissor")

    scissor.addEventListener("click", () => {
        const HumanChoice = "scissor";
        playRound(HumanChoice, getComputerChoice());
    });
};

function playRound(humanChoice, computerChoice) {

    const roundResultDisplay = document.getElementById("round-result");

    const winText = document.createElement("p");
    winText.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    winText.setAttribute(`style`, `color: green;`);

    const loseText = document.createElement("p");
    loseText.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    loseText.setAttribute(`style`, `color: red;`);

    const drawText = document.createElement("p");
    drawText.textContent = `It's a Draw!`;
    drawText.setAttribute(`style`, `color: grey;`);

    if (humanChoice == "rock" && computerChoice == "paper") {
        roundResultDisplay.appendChild(loseText);
        ++computerScore;
        ++round;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        roundResultDisplay.appendChild(winText);
        ++humanScore;
        ++round;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        roundResultDisplay.appendChild(loseText);
        ++computerScore;
        ++round;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        roundResultDisplay.appendChild(winText);
        ++humanScore;
        ++round;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        roundResultDisplay.appendChild(winText);
        ++humanScore;
        ++round;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        roundResultDisplay.appendChild(loseText);
        ++computerScore;
        ++round;
    } else if (humanChoice == computerChoice) {
        roundResultDisplay.appendChild(drawText);
        ++round;
    } else { alert("Invalid input!") };

    if (roundResultDisplay.firstElementChild && round > 1) {
        roundResultDisplay.firstElementChild.remove();
    };

    
    console.log(`round: ${round}`)
    console.log(`human score: ${humanScore}`)
    console.log(`computer score: ${computerScore}`)

    displayResult()
    
}

function displayResult() {
    
    if (round == 5) {
        rock.remove()
        paper.remove()
        scissor.remove()
    
        if (humanScore > computerScore) {
        alert(`CONGRATULATIONS! You Won the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: You! with score of ${humanScore}`)
    } else if (computerScore > humanScore) {
        alert(`You Lose the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: Computer! with score of ${humanScore}`)
        };
        
        startGame()
    
};

};

function startGame() {
    
    let input = prompt();
    if (input == 1) {
        getHumanChoice()

    };
};

startGame()