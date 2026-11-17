
/* Exercise 10.8 - Complex Animations */

$(function () {

    $("button").on("click", function () {

        // Reset the box
        $("#box")
            .stop(true, true)
            .css({
                left: "0px",
                top: "0px",
                opacity: 0.5,
                height: "200px"
            })

            // Animation 1
            .animate({
                left: "495px",
                opacity: 1,
                height: "50px"
            })

            // Animation 2
            .animate({
                top: "400px",
                opacity: 0.2
            })

            // Animation 3
            .animate({
                height: "200px"
            }, 2000);

    });

});
