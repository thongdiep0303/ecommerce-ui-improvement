
/* Exercise 9.4 - Simple Event Handling */

// Lay nut bam va hinh anh
var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");

// Xu ly su kien khi nhan nut Hide / Show
function simpleHandler(event) {

    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {

        btn.innerHTML = "Show";

        // Tao hieu ung bien mat
        content.className = "makeItDisappear";

        // An noi dung sau 1000 milliseconds
        setTimeout(function() {
            content.style.display = "none";
        }, 1000);

    } else {

        btn.innerHTML = "Hide";

        // Hien thi noi dung
        content.style.display = "block";

        // Tao hieu ung xuat hien
        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

// Gan su kien click cho nut
btn.addEventListener("click", simpleHandler);

// Doi anh sang mau xam khi di chuot vao
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

// Tra anh ve binh thuong khi di chuot ra
img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});
