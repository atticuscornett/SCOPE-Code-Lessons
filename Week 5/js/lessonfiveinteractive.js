// You do not need to start a JavaScript file with any special instructions.
// You can also add as many blank lines as you want.

// A single line comment in JavaScript is done using two forward slashes.

/*

A multi-line comment in JavaScript is start by
an slash asterisk and the ended by an asterisk slash.
Make sure you don't forget to end your multi-line comments.

*/

// To review comparison operators, please refer to files from lesson four.

// Logical Operators

// && - AND operator, returns true if both conditions are true.
console.log("AND (&&) Operator");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// || -  OR operator, returns true if any condition is true.
console.log("OR (||) Operator")
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// ! - NOT operator, returns the opposite of the condition
console.log("NOT (!) Operator");
console.log(!true);
console.log(!false);

// prompt command, allows the user to input a string
var userAge = prompt("What age are you?");

// Converts userAge from a string to a number
userAge = Number(userAge);

// if statments, runs code if a condition is true
// isNaN checks if the input is not a number

// I may have gone overboard with the coolness quiz idea.
if (isNaN(userAge)){
    alert("You didn't enter a number!")
}
else{
    // You can put if statements inside of if statements
    // This is referred to as a nested if statement

    // Set isOldEnough to the default, false
    var isOldEnough = false;

    // if the user is old enough, make isOldEnough true
    if (userAge >= 13){
        isOldEnough = true;
    }

    alert("You must complete the coolness quiz to view this site.");

    var coolness = 0;
    var response = prompt("Do you own a four wheeler?");
    // Make the response lowercase
    response = response.toLowerCase();
    if (response == "yes"){
        // Add coolness based on the answer.
        alert("That's pretty cool.");
        coolness += 45;
    }

    // We are reusing the same variable, so we do not need to use the var keyword
    response = prompt("How many dry erase boards do you own (of any size)?");
    // Changing response to a number again
    response = Number(response);
    if (isNaN(response)){
        alert("That's not a number, and not answering correctly isn't cool.");
    }
    else{
        if (response > 0){
            // Each dry erase board is worth 15 coolness points
            coolness += response * 15;
            alert("That's pretty cool.")
        }
    }

    // We are reusing the same variable, so we do not need to use the var keyword
    response = prompt("How many chalk boards do you own (of any size)?");
    // Changing response to a number again
    response = Number(response);
    if (isNaN(response)){
        alert("That's not a number, and not answering correctly isn't cool.");
    }
    else{
        if (response > 0){
            // Each dry erase board removes 7 points.
            coolness -= response * 7;
            alert("That's not cool.")
        }
    }

    response = prompt("How pizza rolls could you eat in one sitting?");
    response = Number(response);
    if (isNaN(response)){
        alert("That's not a number, and not answering correctly isn't cool.");
    }
    else{
        if (response > 0){
            // Each pizza roll is worth 4 coolness points
            coolness += response * 4;
            alert("That's pretty cool.")
        }
    }

    response = prompt("What is your favorite fast food restaurant?");
    response = response.toLowerCase();
    if (response == "taco bell"){
        alert("Epic choice. That's pretty cool.");
        coolness += 25;
    }
    // Else if only runs if the first condition is not
    else if (response == "jacks" || response == "jack's"){
        alert("Nice choice. That's cool.");
        coolness += 20;
    }
    // This has a lot of or statements put together, and will run if any condition is true
    else if (response == "burger king" || response == "zaxby's" || response == "zaxbys"){
        alert("Solid choice. That's cool enough.");
        coolness += 15;
    }
    else if (response == "mcdonalds" || response == "mcdonald's"){
        alert("Not a bad restaurant, but not a cool one either.");
        coolness -= 15;
    }
    else{
        alert("I didn't think of that restaurant so not that cool.")
    }
    // Remember how we set this a while back?
    if (isOldEnough){
        if (coolness > 100){
            alert("You are extremely cool. B) Welcome to the website.")
        }
        else if (coolness > 50){
            alert("You are cool. Welcome to the website.")
        }
        else{
            console("You are old enough, but you are not cool enough.");
        }
    }
    else{
        if (coolness > 100){
            alert("You are young, but also extremely cool. B) Welcome to the website.")
        }
        else if (coolness > 50){
            alert("You are cool, but too young. Come back later.")
        }
        else{
            console("You have been denied.");
        }
    }
}