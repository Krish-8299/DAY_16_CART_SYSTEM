const products = [

    {
        id: 1,
        title: "Premium Hoodie",
        category: "Fashion",
        price: 2499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
        desc: "Luxury oversized hoodie with premium soft fabric."
    },

    {
        id: 2,
        title: "Smart Watch X",
        category: "Electronics",
        price: 5999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
        desc: "Track fitness and notifications with modern design."
    },

    {
        id: 3,
        title: "Neo Sneakers",
        category: "Shoes",
        price: 3999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
        desc: "Premium sneakers with futuristic street style."
    },

    {
        id: 4,
        title: "Wireless Headphones",
        category: "Audio",
        price: 2999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
        desc: "Crystal clear sound with deep bass experience."
    }

];

const productContainer = document.getElementById("products");


function showProducts(data) {

    productContainer.innerHTML = "";

    data.forEach(product => {

        productContainer.innerHTML += `

        <div class="card">

            <img src="${product.image}">

            <div class="product-info">

                <div class="category">
                    ${product.category}
                </div>

                <div class="product-title">
                    ${product.title}
                </div>

                <div class="product-desc">
                    ${product.desc}
                </div>

                <div class="bottom">

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <button class="add-btn" onclick="addToCart(${product.id})">
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = products.find(product => product.id === id);

    const exist = cart.find(product => product.id === id);

    if (exist) {

        exist.quantity += 1;

    } else {

        cart.push({
            ...item,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}


function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    document.getElementById("cart-count").innerText = count;

}

updateCartCount();

showProducts(products);


document.getElementById("searchInput").addEventListener("keyup", (e) => {

    const value = e.target.value.toLowerCase();

    const filterData = products.filter(product =>

        product.title.toLowerCase().includes(value)

    );

    showProducts(filterData);

});