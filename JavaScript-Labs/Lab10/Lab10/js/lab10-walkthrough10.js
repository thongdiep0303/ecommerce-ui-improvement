
/* Exercise 10.10 - jqXHR Handling */

$(function () {

    // Hide loading animation initially
    $(".animLoading").hide();

    // Handle Consume button click
    $("#consume").on("click", function () {

        var url = "data/cities.json";

        // Clear old results
        $("#results ul").empty();

        // Show loading animation
        $(".animLoading").show();

        // Send GET request
        $.get(url, null, null, "json")

            // Request succeeded
            .done(function (data) {

                $.each(data, function (index, city) {

                    var li = $("<li></li>")
                        .text(city.name);

                    li.appendTo("#results ul");

                });

            })

            // Request failed
            .fail(function (xhr, status, error) {

                $("#results").append(
                    $("<p></p>").text(
                        "Failed loading data: " +
                        status + " " + error
                    )
                );

            })

            // Always execute after request
            .always(function () {

                $(".animLoading").fadeOut("slow");

            });

    });

});
