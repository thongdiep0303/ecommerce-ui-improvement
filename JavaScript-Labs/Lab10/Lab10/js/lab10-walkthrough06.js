
/* Exercise 10.6 - Simple jQuery Animation */

$(function () {

    // Fade In
    $("#btnFadeIn").on("click", function () {
        $("figure").fadeIn(1000);
    });

    // Fade Out
    $("#btnFadeOut").on("click", function () {
        $("figure").fadeOut(1000);
    });

    // Toggle Fade
    $("#btnFade").on("click", function () {
        $("figure").fadeToggle(500);
    });

    // Slide Down
    $("#btnSlideDown").on("click", function () {
        $("figure").slideDown("slow");
    });

    // Slide Up
    $("#btnSlideUp").on("click", function () {
        $("figure").slideUp("slow");
    });

    // Toggle Slide
    $("#btnSlide").on("click", function () {
        $("figure").slideToggle(2000);
    });

});
