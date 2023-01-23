function rockPaperScissors() {

    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let playerTurn = "scissors";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
    } else {
        console.log("Invalid Input. Try Again..."); return;
    }


    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove = 0;

    switch (computerRandomNumber) {
        case 1:
            computerMove = "Rock";
            break;
        case 2:
            computerMove = "Paper";
            break;
        case 3:
            computerMove = "Scissors";
            break;

    }
    console.log(`The computer chooses ${computerMove}`);

    if ((playerTurn === rock && computerMove === scissors) ||
        (playerTurn === paper && computerMove === rock) ||
        (playerTurn === scissors && computerMove === paper)) {
        console.log("You win!");
    } else if ((computerMove === rock && playerTurn === scissors) ||
        (computerMove === paper && playerTurn === rock) ||
        (computerMove === scissors && playerTurn === paper)) {
        console.log("You lose!");
    } else {
        console.log("This game was a draw!");
    }
}


rockPaperScissors();