const cartItems = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let totalItems = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        totalItems += item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-details">

                <h2>${item.title}</h2>

                <p>${item.category}</p>

                <h3>
                    ₹${item.price * item.quantity}
                </h3>

                <div class="qty-box">

                    <button onclick="decreaseQty(${index})">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQty(${index})">+</button>

                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    const grandTotal = total;

    document.getElementById("totalItems").innerText = totalItems;

    document.getElementById("grandTotal").innerText = `₹${grandTotal}`;

}

displayCart();


function increaseQty(index) {

    cart[index].quantity++;

    updateCart();

}


function decreaseQty(index) {
    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


function updateCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


function checkout() {

    if (cart.length === 0) {

        alert("Cart is Empty");

        return;

    }

    document.getElementById("popup").style.display = "flex";

    localStorage.removeItem("cart");

}


function closePopup() {

    window.location.href = "index.html";

}