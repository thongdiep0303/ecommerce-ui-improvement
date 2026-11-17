
/* Exercise 8.8 - JavaScript Functions */
/* Sinh viên: Diệp Hiển Thông */

// Biến toàn cục
var boxClass = "movingDiv";

// Hàm tạo ô HTML
function outputBox(num) {

    // Biến cục bộ
    var box = "<div class='" + boxClass
            + "' id='div" + num + "'>";

    box += "This is div " + num;
    box += "</div>";

    // Trả về chuỗi HTML
    return box;
}

// Kiểm tra hàm
console.log("Function outputBox is ready");

// Kiểm tra giá trị trả về
console.log(outputBox(1));
