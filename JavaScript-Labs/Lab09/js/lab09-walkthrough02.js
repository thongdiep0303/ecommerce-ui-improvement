
/* Exercise 9.2 - DOM Family Relations */

// 1. Tim phan tu co ID "first"
var first = document.getElementById("first");
console.log("Element first:", first);

// 2. Tim node con dau tien
console.log("First child:", first.firstChild);

// 3. Tim node anh em tiep theo
console.log("Next sibling:", first.firstChild.nextSibling);

// 4. Tim phan tu cha
console.log("Parent node:", first.parentNode);

// 5. Lay khu vuc chua 3 hinh anh
var stories = document.getElementById("stories");

// 6. Duyet tat ca node con
for (var i = 0; i < stories.childNodes.length; i++) {

    var node = stories.childNodes[i];

    console.log(
        "child " + i + " = " + node +
        " nodeType = " + node.nodeType
    );

    // 7. Doi mau nen cac phan tu HTML
    if (node.nodeType === 1) {
        node.style.backgroundColor = "yellow";
    }
}
