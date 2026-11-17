/* code goes here */


/* Exercise 9.8 - Form Validation */

// Set up event listener
function init() {
    document.getElementById("sampleForm")
        .addEventListener("submit", checkForEmptyFields);
}

// Wait until page is loaded
window.addEventListener("load", init);

// Check for empty fields
function checkForEmptyFields(e) {

    // Hide previous error message
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    // Select all text and password inputs
    var cssSelector =
        "input[type=text],input[type=password]";

    var fields = document.querySelectorAll(cssSelector);

    // Find all empty fields
    var fieldList = [];

    for (var i = 0; i < fields.length; i++) {

        if (fields[i].value == null ||
            fields[i].value == "") {

            // Prevent form submission
            e.preventDefault();

            fieldList.push(fields[i]);
        }
    }

    // Create error message
    var msg = "The following fields can't be empty: ";

    if (fieldList.length > 0) {

        for (var i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }

        // Display error message on page
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}
