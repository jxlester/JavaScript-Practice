
//Numbers

//An integer is a whole number
const myNumber = 42;

//A number with a decimal point is a float which references the "floating point'

const myFloat = 42.01;

const myString = "42.123abc";

console.log(myNumber === myFloat);

console.log(myNumber === myString);
// false because different data types

console.log(myString + 3);

console.log(Number(myString) + 3);

console.log(Number(myString) === myNumber);
//True because same datatype

console.log(Number("Dave"));
// returns NaN for Not a Number, converts string to numbers

console.log(Number(true));
// returns 1, 0 for false

console.log(Number.isInteger(myFloat));
//false if not integer

console.log(Number.parseFloat(myString));
//removes non-numerics and converts other data types to numbers .toFixed converts numbers to strings

console.log(Number.parseFloat(myString).toFixed(2));
//returns up to a certain number of decimals, returns string data

console.log(Number.parseInt(myString));

console.log(myFloat.toString());

console.log(typeof Number.parseFloat);

console.log(Number.parseFloat("4.245abc").toFixed(2));

console.log(Number.isNaN("Dave"));