
/* Exercise 9.7 - Working with Forms */

// Change input background on focus and blur
function setBackground(e) {

    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }

}

// Wait until the page finishes loading
window.addEventListener("load", function() {

    // Select text and password fields
    var cssSelector = "input[type=text],input[type=password]";

    var fields = document.querySelectorAll(cssSelector);

    // Add events to every input field
    for (var i = 0; i < fields.length; i++) {

        fields[i].addEventListener("focus", setBackground);

        fields[i].addEventListener("blur", setBackground);

    }

});
