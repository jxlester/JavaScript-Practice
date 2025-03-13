//Conditionals: Switch Statements
//developers try to avoid switch statements

//syntax
// switch (expression OR value){

//     case choice1:
//         //run this code
//         break;

//     case choice2:
//         //run this different code
//         break;
        
//     //add as many cases as needed

//     default: 
//     //run this code if no case matches
//     //no need for break here
// }

switch (Math.floor(Math.random() * 5 + 1)){

    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;
        
    case 3:
        console.log(3);
        break;
    //add as many cases as needed

    default: 
    console.log("No match");
}

let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
    case computer: 
        console.log("Tie Game!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("Computer wins!");
        }else{
            console.log("playerOne wins!");
        }
        break;
    case "paper":
        if (computer === "scissors"){
            console.log("Computer wins!");
        }else{
            console.log("playerOne wins!");
        }
        break;
    default:
        if (computer === "rock"){
            console.log("Computer wins!");
        }else{
            console.log("playerOne wins!");
        }
}