
/* Exercise 10.5 - Inserting DOM Elements */

$(function () {

    // Create a new image element
    var img = $(
        '<img src="images/art/thumbs/13030.jpg" alt="Artwork">'
    );

    // Select panel
    var panel = $(".panel");

    // Insert image before panel
    img.insertBefore(panel);

});
