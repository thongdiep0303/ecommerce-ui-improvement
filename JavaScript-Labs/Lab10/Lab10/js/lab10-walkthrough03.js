
/* Exercise 10.3 - Advanced Selectors */

$(document).ready(function() {

    // Step 1: Select all password fields
    // $(':password').css('background-color', 'yellow');


    // Step 2: Select every fourth child in the form
    $('form :nth-child(4n)').css(
        'background-color', 'yellow'
    );


    // Step 3: Select labels containing "word"
    $('label:contains("word")').css(
        "color", "black"
    );

});
