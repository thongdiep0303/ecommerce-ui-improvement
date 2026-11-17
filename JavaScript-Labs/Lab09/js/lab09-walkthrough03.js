
/* Exercise 9.3 - Modifying the DOM */

// Step 1: Create a new paragraph
var first = document.getElementById("first");

// Create a text node
var text = document.createTextNode(
    "this is programmatically created"
);

// Create a paragraph element
var p = document.createElement("p");

// Add text into the paragraph
p.appendChild(text);

// Add paragraph to the HTML page
first.appendChild(p);


// Step 2: Remove an HTML element
var icons = document.getElementById("iconList");

// Remove the second item (chapters)
icons.removeChild(
    document.getElementById("deleteThisOne")
);
