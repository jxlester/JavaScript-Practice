
//strings
const myVariable = "Mathmatics"

console.log(myVariable);

//The length Property
console.log(myVariable.length);

//String methods
console.log(myVariable.charAt(6));

console.log(myVariable.indexOf("mat"));
//returns char position of first occurance

console.log(myVariable.lastIndexOf("ath"));
//returns char position of last occurance

console.log(myVariable.slice(5,8));
//returns characters 5-8 (3 characters)

console.log(myVariable.slice(5));
//returns character 5 to the end of the string

console.log(myVariable.toUpperCase());
//returns string in all uppercase, toLowerCase also works

console.log(myVariable.includes("div"));
//includes retutrns false if snippet "div" is not included in the myVariable string or true if it is

console.log(myVariable.split("h"));
console.log("John,Joe,Dave".split(","));
console.log("Good ol boy".split(" "));
//splits string wherever character provided occurs and remove the character. If no character provided, every char will be returned as a separate string. If a char is provided that doesn't occur, it will not split. 


