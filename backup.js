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

function play() {
    const rock = document.querySelector("#rock")

    rock.addEventListener("click", () => {
        const getHumanChoice = "rock";
        playRound(getHumanChoice, getComputerChoice())
    });

    const paper = document.querySelector("#paper")

    paper.addEventListener("click", () => {
        const getHumanChoice = "paper";
        playRound(getHumanChoice, getComputerChoice())
    });

    const scissor = document.querySelector("#scissor")

    scissor.addEventListener("click", () => {
        const getHumanChoice = "scissor";
        playRound(getHumanChoice, getComputerChoice())
    });
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    play()

    if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
        ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        alert("You Win! rock beats scissor.")
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        alert("You lose! scissor beats Paper.")
        ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("You Win! Paper beats Rock.")
        ++humanScore;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        alert("You Win! Scissor beats Paper.")
        ++humanScore;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        alert("You Lose! Rock beats Scissor.")
        ++computerScore;
    } else if (humanChoice == computerChoice) {
        alert("It's a draw!")
    } else { alert("Invalid input!") };
    
}

function playGame() {

    playRound()
    
    if (humanScore > computerScore) {
        alert(`CONGRATULATIONS! You Won the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: You! with score of ${humanScore}`)
    } else if (computerScore > humanScore){
        alert(`You Lose the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: Computer! with score of ${humanScore}`)
    } else {
        alert("draw")
    }

}

playGame()
