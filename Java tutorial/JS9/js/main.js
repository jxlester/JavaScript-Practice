// Conditionals: Ternary Operator

//syntax - shorthand for if, else
//condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup
? `Yes, we have ${soup} today` : "Sorry, no soup today";

console.log(soupAccess);

let testScore = 99;
let myGrade = 
testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";

console.log(`My test grade is a ${myGrade}.`);

let playerOne = "rock";
let computer = "scissors";

let result = playerOne === computer ? "Tie Game!"
: playerOne === "rock" && computer === "paper" ? "Computer Wins!"
: playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
: playerOne === "Scissors" && computer === "rock" ? "Comupter Wins!" :
"Player One Wins!";

console.log(result);