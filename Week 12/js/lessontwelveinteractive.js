console.log("Lesson Twelve Interactive");

/* This is the same JavaScript that we wrote in lesson ten! */

// Run function when the submit button is clicked
function submitForm(){
    // Get the value of an input field
    let name = document.getElementById("fullName").value;
    console.log("Full Name: " + name);

    // Check if the form input is valid
    let isValid = document.getElementById("myForm").checkValidity();
    if (isValid){
        // Get the current date
        let currentDate = new Date();
        // Get the date from the form
        let userDate = new Date(document.getElementById("birthday").value);
        // Get years since 1970 (getTime returns milliseconds since 1970)
        let currentYears = (currentDate.getTime()/1000)/60/60/24/365.25;
        let userYears = (userDate.getTime()/1000)/60/60/24/365.25;
        let userAge = Math.floor(currentYears-userYears);

        // Alternative way to add to the body that I didn't have time to cover
        // Create new element
        let newElement = document.createElement("h1");
        newElement.setAttribute("class", "response");
        // Check if the checkbox is checked
        let checked = document.getElementById("wantEmail").checked;
        if (checked){
            // Change element text
            newElement.innerHTML = "You want emails.";
        }
        else{
            // Change element text
            newElement.innerHTML = "You don't want emails.";
        }
        
        // Add element to body
        document.body.appendChild(newElement);


        // IMPORTANT NOTE: Adding to innerHTML on the body will reset the JavaScript added click listeners from other elements
        // It also resets the values of the form
        document.body.innerHTML += "<h2 class='response'>You are " + userAge + " years old</h2>";        
        
    }
    else{
        // Tell the user that the form is invalid
        document.getElementById("myForm").reportValidity();
    }

}

// document.body gets the body tag
// Runs when the enter key is pressed
document.body.onkeydown = function(event){
    // Check if the key pressed is the enter key
    if (event.key == "Enter"){
        // Emulate a click on the submit button
        document.getElementById("submitButton").click();
    }
    console.log(event.key);
};