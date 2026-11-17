
/*
    Exercise 8.10 - Creating JavaScript Objects
    Sinh viên: Diệp Hiển Thông
    MSSV: 31241026737
*/

// Bước 1: Tạo Constructor Function
function Order(product, price, quantity) {

    // Thuộc tính của đối tượng
    this.product = product;
    this.price = price;
    this.quantity = quantity;

    // Phương thức tính tổng tiền
    this.total = function() {
        return this.price * this.quantity;
    };

    // Phương thức tạo HTML hiển thị sản phẩm
    this.output = function() {

        return `
            <div class="product">
                <h3>${this.product}</h3>

                <div class="detail">
                    <span>Đơn giá</span>
                    <strong>$${this.price.toFixed(2)}</strong>
                </div>

                <div class="detail">
                    <span>Số lượng</span>
                    <strong>${this.quantity}</strong>
                </div>

                <div class="detail total">
                    <span>Thành tiền</span>
                    <span>$${this.total().toFixed(2)}</span>
                </div>
            </div>
        `;
    };
}

// Bước 2: Khởi tạo hai đối tượng
var example1 = new Order(
    "Self Portrait in a Straw Hat",
    15,
    2
);

var example2 = new Order(
    "Untitled #23",
    10,
    4
);

// Bước 3: Hiển thị hai đối tượng trên trang
var productList = document.getElementById("productList");

productList.innerHTML =
    example1.output() + example2.output();

// Bước 4: Kiểm tra bằng Console
console.log("Exercise 8.10 - Creating Objects");

console.log("Example 1:", example1);
console.log("Product 1:", example1.product);
console.log("Total 1:", example1.total());

console.log("Example 2:", example2);
console.log("Product 2:", example2.product);
console.log("Total 2:", example2.total());

console.log("Exercise 8.10 completed");
