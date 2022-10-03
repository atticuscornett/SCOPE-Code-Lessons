console.log("Lesson Seven Interactive");

// Creating an Empty Array

var nameArray = [];

// Creating an Array With Values

var ageArray = [13,9,8,62,5];

/*
    Accessing Array Indexes
    Array indexes start at 0, not one
    So in this case, we are getting the fourth item in the list, at index 3
*/

console.log(ageArray[3]);

// Changing the Value at an Index

ageArray[3] = 15;

console.log(ageArray[3]);

// Adding to Arrays

console.log("Adding to list");
var namePrompt = prompt("Enter a name or leave blank to stop:");

// Null is the value that is returned if the user presses cancel.
while (namePrompt != "" && namePrompt != null){
    // Add Name to the End of Array
    nameArray.push(namePrompt);
    namePrompt = prompt("Enter a name or leave blank to stop:");
}

console.log(nameArray);

ageArray = [13,9,8,62,5];
console.log("Removing Items");
console.log(ageArray);

// Remove the Last Item in Array with .pop
ageArray.pop();

console.log(ageArray);

// Remove the First Item in Array with .shift
ageArray.shift();

console.log(ageArray);

/*
    Splice (with a p)
    Removes item in a range
    The function takes in the index to start removing at and how many items to remove
    ageArray.splice(0, 2); will remove 2 items, starting at index 0
*/

ageArray.splice(0,2);
console.log(ageArray);

// Resetting Age Array
ageArray = [13,9,8,62,5];

// Check if Item in Array
console.log(ageArray.includes(9));
console.log(ageArray.includes(19));

// Check Where In List Item Is (If item not in list, returns -1)
console.log(ageArray.indexOf(9));
console.log(ageArray.indexOf(19));

/*
    Slice (withOUT a p)
    Gets items in a range
    The function takes in the index to start the range (inclusive) and the index to end (exclusive)
    ageArray.splice(0, 2); will return the items at indexes 0 and 1, without removing them from the list
*/

console.log(ageArray.slice(0,2));

// Get the Length of a List
console.log(ageArray.length);

// Sort the List in Alphabetical (NOT NUMERICAL) order
// It sorts numbers by first digit
console.log("Sort");

nameArray.sort()
console.log(nameArray);
ageArray.sort()
console.log(ageArray);

// Loops With Arrays

var randomNames = ["Joe", "Banana", "Ham"];
randomNames[8] = "Chris";

// For In
console.log("For In");
// Returns Indexes and Does Not Include undefined
for (let randomIndex in randomNames){
    console.log(randomNames[randomIndex]);
}

// For Of
console.log("For Of");
// Returns Items from List and Does Include undefined
for (let randomItem of randomNames){
    console.log(randomItem);
}

/*
    Technically, Arrays in JavaScript are a type of object. However, they are a special type of object with their own functions.

    Here is an example of a classic key-value object in JavaScript. (Some languages call this relationship a dictionary.)
*/

console.log("JavaScript Objects");

var studentInfo = {
    "name": "Atticus Cornett",
    "present": true,
    "classes": ["Podcasting", "Coding"]
};

// Two ways to access the values

console.log(studentInfo.name);
console.log(studentInfo["name"]);

// Creating New Key

studentInfo["attendedClasses"] = 7;
console.log(studentInfo["attendedClasses"]);