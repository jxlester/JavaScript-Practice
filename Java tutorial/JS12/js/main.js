//Loops

// let myNumber = 50;

// while (myNumber < 50){
//     myNumber += 2; //++; adds 1
//     console.log(myNumber);
// }
//Don't create an endless loop

//do while
// do {
//     myNumber += 2;
//     console.log(myNumber);
// } while (myNumber < 50);

// do {
//     console.log(myNumber);
// } while (myNumber < 50);
//what happens in the do block must happen at least once

//for
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let name = "Jacob";
// for (let i = 0; i <= name.length; i++) {
//     console.log(name.charAt(i));
// }

let name = "Jacob";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1){
        counter += 2;
        continue;
    }
    if (myLetter === "c") break;
    counter++;
}
console.log(counter);