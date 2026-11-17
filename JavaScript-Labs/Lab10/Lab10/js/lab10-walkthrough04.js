
/* Exercise 10.4 - jQuery Listeners */

$(function () {

    $(".panel")

        // Mouse move event
        .on("mousemove", function (e) {
            $("#message").html(
                "x=" + e.pageX + " y=" + e.pageY
            );
        })

        // Mouse leave event
        .on("mouseleave", function () {
            $("#message").html("goodbye!");
        })

        // Click event
        .on("click", function () {

            $("#message").html(
                "stopped move reporting"
            );

            $(".panel").off("mousemove");

        });

});
