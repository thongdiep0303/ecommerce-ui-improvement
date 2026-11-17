
/* Exercise 10.9 - GET Requests */

$(function () {

    $("#consume").on("click", function () {

        // Local JSON data
        var url = "data/cities.json";

        // Show loading text
        $("#results").html(
            "<p>Loading cities...</p>"
        );

        // Send GET request
        $.get(url, function (data, status) {

            if (status === "success") {

                var list = $("<ul></ul>");

                // Loop through JSON data
                $.each(data, function (index, city) {

                    $("<li></li>")
                        .text(city.name)
                        .appendTo(list);

                });

                // Display list
                $("#results").empty().append(list);

            }

        }, "json")

        // Handle errors
        .fail(function (xhr, status, error) {

            $("#results").text(
                "GET failed: " + status + " " + error
            );

        });

    });

});
