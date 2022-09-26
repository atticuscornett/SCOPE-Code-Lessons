// JavaScript Loops

console.log("While Loops");

// While loops run until a set condition is false.

var myNumber = 0;

while (myNumber < 5){
    console.log(myNumber);
    myNumber++;
}

// While loop can also be nested inside another loop
console.log("Nested Loops");

myNumber = 1;
while (myNumber <= 5){
    console.log("First five multiples of " + String(myNumber));
    
    // A for loop consists of a variable declaration, the loop condition, and the variable action

    // A let statement only defines the variable inside of the for statement (This means the variable is only defined in the "scope" of the for loop.)
    for (let multiple = 1; multiple <= 5; multiple++){
        console.log(myNumber * multiple);
    }

    // This is the same as myNumber++;
    myNumber += 1;
}

// A do while loop runs at least once, whether or not the condition is true
do{
    console.log("Do While Loop");
    myNumber++;
} while(myNumber < 1);

// The break statement stops a loop completely, whether or not the condition is true. The break statement also does not need parentheses, unlike most functions.
console.log("Break Statement Example");

myNumber = 0;
while (myNumber <= 5){
    console.log(myNumber);
    if (myNumber == 3){
        console.log("Stopped loop with break.")
        break;
    }
    myNumber++;
}

// The continue statement skips the rest of one iteration of the loop.
console.log("Continue Statement Example");

myNumber = 0;
while (myNumber <= 5){
    myNumber++;
    if (myNumber == 3){
        console.log("Skipped loop iteration with continue.")
        continue;
    }
    console.log(myNumber);
}

/* 
Generate a random number
Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
We multiply by 10 to get a number between 0 and 9.9999
Math.floor() rounds down to the nearest whole number (Making the range 0-9)
Adding one makes the range 1-10
*/

var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = Number(prompt("Guess a number 1-10:"));
while (guess != randomNumber){
    alert("Incorrect!");
    guess = Number(prompt("Guess a number 1-10:"));
}
alert("You win!");

console.log("Other String Methods");

var myString = "This is a very long string that has a lot of text in it that I want to break down.";

// How long is the string (does not require parentheses)
console.log(myString.length);

// Get part of a string
console.log(myString.substring(15, 19));

// Check if a string is inside of another string
console.log(myString.includes("long"));