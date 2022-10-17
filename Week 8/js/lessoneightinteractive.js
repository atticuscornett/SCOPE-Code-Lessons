console.log("Lesson Eight Interactive");

// Basic function declarations can be used before they are defined in the code.
// They can also be overwritten by other function declarations.

helloWorld();

function helloWorld(){
    console.log("Hello, world!");
}

function clickMe(){
    alert("You just clicked me!");
}

// Functions can take in parameters and return values.
// A return statement also acts as a break function statement.

function calcHyp(a, b){
    // Using the let declaration because we only need the value inside of the function.
    let output = a**2 + b**2;
    output = output**0.5;
    return output;
}

console.log(calcHyp(3, 4));

// Recursion is when a function runs itself.
// Usually, it is easier to use a loop than recursion, but there are certain situations in which recursion is the only option.
// Recursion is often used to loop through hierarchical data of unknown depth.


// Actually doing it right this time :)
// Also, it turns out that 0 factorial is 1. (I had to google it.)
function calcFact(number){
    if (number < 0){
        // return; is the same as return undefined;
        return;
    }
    if (number == 0){
        return 1;
    }
    return number * calcFact(number - 1);
}

console.log(calcFact(6));

// .forEach is another way to loop through an array.

var pizzaToppings = ["pepperoni", "cheese", "pork", "sausage", "chicken"]

// In this exmaple, I am using an inline function.
// Inline functions are not given names.

pizzaToppings.forEach(function(item){console.log("Inline function - " + item);})

// Arrow functions are another way to create a function.

const mutiplyByFive = (input) => {return input * 5};

console.log(mutiplyByFive(5));

// Time is set in milliseconds

setTimeout(function(){alert("setTimeout waits ten seconds and runs the code once.");}, 10000);

setInterval(() => {console.log("setInterval will run this code every 15 seconds.");}, 15000);