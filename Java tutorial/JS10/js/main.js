//User Input
let myBoolean = confirm("Ok === True \n Cancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else{
    console.log("You didn't enter a name");
}
