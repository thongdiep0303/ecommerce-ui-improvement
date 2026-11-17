
/*
 Exercise 9.1 - Basic DOM Selection
 Sinh viên: Diệp Hiển Thông
 MSSV: 31241026737
*/

// Bước 2: Chọn textarea bằng ID
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3: Chọn tiêu đề và thay đổi nội dung
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Bước 4: Thay đổi tiêu đề trực tiếp
document.getElementById("pageTitle").innerHTML =
    "Even newer title";

// Bước 5: Lấy HTML bên trong phần tử first
msg.value = document.getElementById("first").innerHTML;

// Bước 6: Lấy nội dung văn bản, bỏ thẻ HTML
msg.value = document.getElementById("first").innerText;

// Bước 7: Lấy thuộc tính class của textarea
msg.value = "My class is " +
    msg.getAttribute("class");

// Bước 8: Chọn phần tử theo tên thẻ
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Bước 9: Duyệt các phần tử span
elem = document.getElementsByTagName("span");

for (var i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + elem[i].innerText;
}

// Bước 10: Chọn phần tử theo class
document.getElementById("msgArea").value = "";

var counts =
    document.getElementsByClassName("count-number");

for (var i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + counts[i].innerText;
}

// Bước 11: Sử dụng querySelector
var ps = document.querySelector("#first p");

document.getElementById("msgArea").value =
    ps.innerHTML;

// Bước 12: Sử dụng querySelectorAll
ps = document.querySelectorAll("#first p");

for (var i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value +=
        ps[i].innerHTML + "\n";
}

// Bước 13: Ẩn textarea
// Tạm thời để comment để chụp kết quả trước
// document.getElementById("msgArea")
//     .setAttribute("class", "hidden");

// Bước 14: Đổi màu nền vùng features
document.getElementById("features")
    .style.backgroundColor = "green";

// Kiểm tra trong Console
console.log("Exercise 9.1 - Basic DOM Selection");
console.log("Student: Diep Hien Thong");
console.log("Title:", title.innerHTML);
console.log("Number of spans:", elem.length);
console.log("Count elements:", counts.length);
console.log("Exercise 9.1 completed");
