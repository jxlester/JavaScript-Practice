//Conditionals: If Statements

//syntax
//if (condition){
    //if true, run some code, if false, disreguard}
// else{
    //run this code if false}

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = `No soup for you!`
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else{
    reply = `Sorry, we're out of soup`;
}
//undefined variables are considered false
console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90){
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}

console.log(grade);

let playerOneName = "Jaggles";
let playerOne = "scissors";
let computer = "paper";
let winner;

if (playerOne === computer) {
    winner = "Tie Game!"
} else if (playerOne === "rock"){
    if (computer === "paper"){
        winner = "Opponent wins!";
    } else {
        winner = `${playerOneName} wins!`;
    }
}else if (playerOne === "paper"){
    if (computer === "scissors"){
        winner = "Opponent wins!";
    } else{
        winner = `${playerOneName} wins!`;
    }
} else {
    if (computer === "rock"){
        winner = "Opponent wins!";
    } else{
        winner = `${playerOneName} wins!`;
    }
}

console.log (winner);
