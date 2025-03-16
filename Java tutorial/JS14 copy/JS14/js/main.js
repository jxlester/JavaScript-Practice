//var, let, const

// var x = 1;
// // really only for legacy
// var x = 2;
//doesn't throw an error if defined twice



// let x = 1;
// let x = 2;
//throws an error

// let x = 1;
// x = 2;
// //also throws error

// const x = 1;
// x = 2;
//throws an error, const cannot be redefined
//const should be used as much as possible

//global scope
// var x = 1;
// let y = 2;
// const z = 3;

// //local scope - block scope
// {
//     let y = 4;
//     console.log(y);
// }

// //local scope - function
// function myFunc() {
//     const z = 5;
//     console.log(y);
//     {
//         const y = 4;
//         console.log(y);
//     }
// }

// console.log(y);
// myFunc();

var x = 1; //function scoped
let y = 2; // block scoped
const z = 3;

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);
//global variables are NOT desirable

function myFunc() {
    var x = 10;
    const z = 5;

    {
        var x = 11; //var function scoped, will ignore block curly braces and change values in function
        const z = 6; //const block scoped, only available inside the block, respect curly braces
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
//pulls definitions from parent if not defined locally

myFunc();