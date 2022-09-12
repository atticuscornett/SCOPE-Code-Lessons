console.log("This is saved in another file.")
var myNumber = 20;

// Arithmetic Operators (Basic Math)
console.log("Arithmetic Operators")

// Addition
console.log(myNumber + 1);

// String Addition
console.log("I am adding this string" + " to this string.");

// Subtraction
console.log(myNumber - 1);

// Multiplication
console.log(myNumber * 2);

// Division
console.log(myNumber / 4);

// Exponents
console.log(myNumber ** 2);

// Getting the square root using exponents
console.log(64 ** 0.5);

// Modulus/Remainder
console.log(myNumber % 3);

// Increment variable by one
myNumber++;
console.log(myNumber);

// Decrement variable by one
myNumber--;
console.log(myNumber);



// Assignment Operators (Changes variable values)
console.log("Assignment Operators")

// Assign a value to a variable
myNumber = 14;
console.log(myNumber);

// Combining an arithmetic operator with = results in an assignment operator

// This is the equivalent of myNumber = myNumber + 5;
// In other words, this adds five to the variables.
myNumber += 5;
console.log(myNumber);



// Comparison Operators
console.log("Comparison Operators");

// Checks if two values are equal, regardless of data type
console.log(1 == "1");

// Checks if two values are equal, but also checks if data types are equal
console.log(1 === "1");

// Checks if two values are not equal, regardless of data type
console.log(1 != "1");

// Checks if two values are not equal, but also checks if daata types are not equal
console.log(1 !== "1");

// Checks if one value is higher than another
console.log(5 > 3);
console.log(5 < 3);

// If two values are the same, returns false.
console.log(5 > 5);

// Same as the > and < operators, but return true if values are equal.
console.log(5 >= 5);
console.log(5 <= 5);