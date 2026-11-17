
/* Exercise 8.6 - Built-in JavaScript Objects */
/* Sinh viên: Diệp Hiển Thông */

const result = document.getElementById("result");

// 1. Tạo các chuỗi
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

let output = "<h3>1. String Objects</h3>";

output += "Giá trị stringOne: " + stringOne;
output += "<br>typeof stringOne = " + typeof stringOne;
output += "<br>typeof stringThree = " + typeof stringThree;

// 2. So sánh chuỗi
output += "<h3>2. String Comparisons</h3>";

output += "stringOne == stringTwo: " +
    (stringOne == stringTwo);

output += "<br>stringOne == stringFour: " +
    (stringOne == stringFour);

output += "<br>stringOne === stringTwo: " +
    (stringOne === stringTwo);

output += "<br>stringTwo === stringThree: " +
    (stringTwo === stringThree);

output += "<br>stringTwo === stringFour: " +
    (stringTwo === stringFour);

// 3. Date Object
var dateOne = new Date();

output += "<h3>3. Date Object</h3>";
output += "Current date: " + dateOne;

// 4. Math Object
output += "<h3>4. Math Object</h3>";

output += "Math.PI = " + Math.PI;
output += "<br>Math.sqrt(4) = " + Math.sqrt(4);
output += "<br>Math.random() = " + Math.random();

// Hiển thị kết quả
result.innerHTML = output;
