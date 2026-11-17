
/* Exercise 10.7 - More jQuery Animation */

$(function () {

    // Remove preview when mouse leaves
    function removePreview() {

        $(this).removeClass("gray");

        $("#preview").remove();

    }

    // Move preview with mouse
    function movePreview(e) {

        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");

    }

    // Handle image events
    $("figure img")

        .on("mouseover", function (e) {

            // Get image information
            var alt = $(this).attr("alt");
            var src = $(this).attr("src");

            // Replace small with medium
            var newsrc = src.replace(
                "small", "medium"
            );

            // Create preview container
            var preview = $(
                '<div id="preview"></div>'
            );

            // Create larger image
            var image = $("<img>").attr(
                "src", newsrc
            );

            // Create caption
            var caption = $("<p></p>").text(alt);

            // Add image and caption
            preview.append(image, caption);

            // Add preview to page
            $("body").append(preview);

            // Make small image gray
            $(this).addClass("gray");

            // Position preview
            movePreview(e);

            // Fade preview in
            preview.fadeIn(1000);

        })

        .on("mouseleave", removePreview)

        .on("mousemove", movePreview);

});
