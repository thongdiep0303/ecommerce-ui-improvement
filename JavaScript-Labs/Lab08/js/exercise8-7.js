
/* Exercise 8.7 - Arrays */
/* Sinh viên: Diệp Hiển Thông */

// Bước 1: Tạo mảng các ngày từ thứ Hai đến thứ Sáu
var daysOfWeek = new Array(
    "Mon", "Tues", "Wed", "Thur", "Fri"
);

// Bước 2: Thêm thứ Bảy vào cuối mảng
daysOfWeek.push("Sat");

// Bước 3: Thêm Chủ nhật vào đầu mảng
daysOfWeek.unshift("Sun");

// Hiển thị danh sách ngày
document.getElementById("daysOutput").textContent =
    daysOfWeek.join(" - ");

// Bước 4: Tạo bảng lịch
var calendar = "<table>";

// Tạo hàng tiêu đề
calendar += "<thead><tr>";

for (var i = 0; i < daysOfWeek.length; i++) {

    var day;

    // In nghiêng tên ngày dài hơn 3 ký tự
    if (daysOfWeek[i].length < 4) {
        day = daysOfWeek[i];
    } else {
        day = "<em>" + daysOfWeek[i] + "</em>";
    }

    calendar += "<th>" + day + "</th>";
}

calendar += "</tr></thead>";

// Bước 5: Hiển thị các ngày từ 1 đến 30
calendar += "<tbody>";

var currentDay = 1;

for (var week = 0; week < 5; week++) {
    calendar += "<tr>";

    for (var weekday = 0; weekday < 7; weekday++) {

        if (currentDay <= 30) {

            var cellClass = weekday === 0
                ? " class='sunday'"
                : "";

            calendar += "<td" + cellClass + ">"
                     + currentDay + "</td>";

            currentDay++;

        } else {
            calendar += "<td></td>";
        }
    }

    calendar += "</tr>";
}

calendar += "</tbody></table>";

// Đưa bảng lịch vào HTML
document.getElementById("calendarOutput").innerHTML =
    calendar;

// Kiểm tra bằng Console
console.log("Exercise 8.7 - Arrays");
console.log("Days of week:", daysOfWeek);
console.log("Total days:", 30);
