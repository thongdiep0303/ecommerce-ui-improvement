
/* Exercise 9.6 - Debugging Events */

// Global variable
var boxClass = "movingDiv";

// Function to create HTML boxes
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

// Wait until page loads
window.addEventListener("load", function() {

    // Select all movingDiv elements
    var divs = document.querySelectorAll(".movingDiv");

    // Add mouseover event to each div
    for (var i = 0; i < divs.length; i++) {

        divs[i].addEventListener("mouseover", function(e) {

            alert("triggered by " + e.target.id);

        });

    }

});
