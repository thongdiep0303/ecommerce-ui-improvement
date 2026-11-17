
/*
    Exercise 8.11 - Arrays of Objects
    Sinh viên: Diệp Hiển Thông
    MSSV: 31241026737
*/

// 1. Tạo Constructor Function cho Country
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// 2. Tạo mảng các đối tượng quốc gia
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257)
];

// Thêm quốc gia bằng push()
countries.push(
    new Country("Spain", "ES", "Madrid", 46505963)
);

countries.push(
    new Country(
        "United Kingdom",
        "GB",
        "London",
        62348447
    )
);

// 3. Duyệt mảng bằng vòng lặp for
console.log("=== COUNTRY NAMES ===");

for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name);
}

// 4. Truy cập thuộc tính bằng bracket notation
console.log("=== BRACKET NOTATION ===");

for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    var temp = "name";

    console.log(c[temp]);
}

// 5. Duyệt tất cả thuộc tính bằng for...in
var countryList =
    document.getElementById("countryList");

var output = "";

for (var i = 0; i < countries.length; i++) {

    var c = countries[i];

    output += "<div class='country-card'>";

    output += "<img src='flags/" + c.iso +
              ".png' alt='Flag of " + c.name + "'>";

    output += "<h3>" + c.name + "</h3>";

    for (var propertyName in c) {

        output += "<div class='detail'>";

        output += "<strong>" +
                  propertyName + ": </strong>";

        if (propertyName === "population") {
            output += c[propertyName].toLocaleString();
        } else {
            output += c[propertyName];
        }

        output += "</div>";
    }

    output += "</div>";
}

// 6. Hiển thị kết quả ra HTML
countryList.innerHTML = output;

// 7. Kiểm tra bằng Console
console.log("=== ARRAYS OF OBJECTS ===");
console.log("Total countries:", countries.length);
console.log("Country objects:", countries);
console.log("Exercise 8.11 completed");
