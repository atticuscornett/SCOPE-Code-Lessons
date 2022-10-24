console.log("Lesson Nine Interactive");

// document.getElementById() selects an element based on it's unique id.
document.getElementById("changeMe").innerHTML = "SCOPE Coding Lessons";

// We can use functions, recursion, and the DOM to create a typing animation.
function typeAnim(text, time, id, index){
    // Add the next letter to the element with the input id
    document.getElementById(id).innerHTML += text[index];
    // Move to the next letter
    index += 1;
    // Check if there are any letters left to type
    if (index < text.length){
        // Wait a set period and type the next letter
        setTimeout(() => {
            typeAnim(text, time, id, index);
        }, time);
    }
}

typeAnim("JavaScript DOM (Document Object Model)", 75, "animateThis", 0);

// Get all of the elements of a certain tag
console.log(document.getElementsByTagName("h1"));

// Get all of the elements with a certain class
var coolHeadings = document.getElementsByClassName("coolHead");

// We are using for of instead of for in because for in returns properties that we do not want to change.
// It is also easier to use for of instead of for in.
for (let coolThing of coolHeadings){
    // Add sunglasses to the cool headings.
    // innerText only returns the text in a tag while innerHTML also returns child tags.
    coolThing.innerText += " B) 😎";
}

// We can also set the onclick action of an element using JavaScript.
document.getElementById("clickMe").onclick = () => {
    // The hidden attribute hides an element from view, but does not actually remove it from the page.
    // You can see the element in the inspector even when it is hidden.
    document.getElementById("clickMe").hidden = true;
};

// onmouseover and onmouseout run when the mouse is moved on and off of an element
document.getElementById("mouseReact").onmouseover = () => {
    document.getElementById("mouseReact").innerHTML = "The mouse is touching me.";
};

document.getElementById("mouseReact").onmouseout = () => {
    document.getElementById("mouseReact").innerHTML = "The mouse is not touching me.";
};

// Alternative ways to get and set attributes
console.log(document.getElementById("bigOnly").getAttribute("class"));

document.getElementById("bigOnly").setAttribute("class", "bigTitle anotherClass");