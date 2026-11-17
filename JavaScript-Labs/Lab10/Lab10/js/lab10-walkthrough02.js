
/* Exercise 10.2 - Basic Selectors */

$(document).ready(function() {

    // Step 1: Select textarea and change its value
    var msg = $('#msgArea');

    msg.val("here is some new text");


    // Step 2: Change HTML title
    $('#pageTitle').html("new Title");


    // Step 3: Get class attribute
    $('#msgArea').val(
        "My class is " + $('#msgArea').attr("class")
    );


    // Step 4: Change button background to red
    var buttons = $('button');

    buttons.css('background-color', 'red');


    // Step 5: Change body background to ivory
    var temp = $('body');

    temp.css("background-color", "ivory");


    // Step 6: Add selected class
    $('.center-icons').addClass('selected');

});
