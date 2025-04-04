//My First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
            computerChoice === 1 
            ? "rock" 
            : computerChoice === 2 
            ? "paper" 
            : "scissors";

            let result = playerOne === computer 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nTie Game!`
            : playerOne === "rock" && computer === "paper" 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors" 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "Scissors" && computer === "rock" 
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            :`playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne Wins!`;

        alert (result);

        let playAgain = confirm("Play Again?");
        playAgain ? location.reload() 
        : alert("Okay, thanks for playing!")
        }else {
            alert("You didn't enter rock, paper, or scissors.")
        }
    }else {
        alert ("I guess you changed your mind, maybe next time.");
    }

} else {
    alert("Ok, maybe next time!")
}