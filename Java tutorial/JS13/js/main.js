//Functions

//Methods = Functions already built into JS!

// "Dave".toLowerCase();
//function

// function sum(num1, num2) {
//  if (num2 === undefined) {
//     return num1 + num1;
//  }
//     return num1 + num2;
// }

// console.log(sum(5, 10));

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("playerOne@gmail.com"));

//anonymous functions- defined within a const or let
// const getUserNameFromEmail = function (email){
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("dave@dave.com"));

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("jacob@dave.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jAGGLES"));
console.log(toProperCase("september"));