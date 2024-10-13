var basketNavbar = document.querySelector(".basket");
var side = document.querySelector(".side");
basketNavbar.onclick = function() {
    side.style.display = "block";
}

var cancle = document.querySelector(".cancle");
cancle.onclick = function() {
    side.style.display = "none";
}

var allProducts = document.querySelectorAll(".items_info");
var side2 = document.querySelector(".side .selected_element");
var total_text = document.querySelector(".total_text");
var btn = document.querySelector(".btn");
var totalPrice = 0;

allProducts.forEach(function(item) {
    var icon = item.querySelector(".fas.fa-shopping-basket");
    icon.onclick = function(event) {
        event.stopPropagation();
        totalPrice +=  +(item.getAttribute("price"));
        side2.innerHTML += item.textContent + "  ";
        if (side2.innerHTML != "") {
            btn.style.display = "block";
        }
    }
});

btn.onclick = function () {
    total_text.innerHTML = totalPrice;
    total_text.style.display = "block";
}
