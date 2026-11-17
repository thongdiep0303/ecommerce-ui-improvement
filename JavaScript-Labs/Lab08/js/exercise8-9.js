
/*
    Exercise 8.9 - Functions as Objects
    Sinh viên: Diệp Hiển Thông
    MSSV: 31241026737
*/

// Thông tin đơn hàng
var productName = "Sample Product";
var price = 15;
var quantity = 2;
var isCanadian = true;

// 1. Hàm trả về thuế suất
function taxRate() {
    if (isCanadian) {
        return 0.05;
    } else {
        return 0;
    }
}

// 2. Hàm tính tiền thuế
// taxFunction là một hàm được truyền vào
function calculateTax(amount, taxFunction) {
    return amount * taxFunction();
}

// 3. Hàm tính tổng tiền
function calculateTotal(price, quantity) {

    var subtotal = price * quantity;

    // Truyền anonymous function làm tham số
    var tax = calculateTax(subtotal, function() {
        return taxRate();
    });

    return subtotal + tax;
}

// 4. Thực hiện tính toán
var subtotal = price * quantity;
var tax = calculateTax(subtotal, function() {
    return taxRate();
});

var total = calculateTotal(price, quantity);

// 5. Hiển thị kết quả lên HTML
document.getElementById("subtotalResult").textContent =
    "$" + subtotal.toFixed(2);

document.getElementById("taxRateResult").textContent =
    (taxRate() * 100) + "%";

document.getElementById("taxResult").textContent =
    "$" + tax.toFixed(2);

document.getElementById("totalResult").textContent =
    "$" + total.toFixed(2);

// 6. Kiểm tra bằng Console
console.log("Exercise 8.9 - Functions as Objects");
console.log("Product:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Tax Rate:", taxRate() * 100 + "%");
console.log("Tax:", tax);
console.log("Total:", total);
console.log("Exercise 8.9 completed");
