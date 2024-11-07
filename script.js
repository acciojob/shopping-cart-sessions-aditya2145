// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cart = sessionStorage.getItem("cart")?JSON.parse(sessionStorage.getItem("cart")):[]


// DOM elements
let cartList = document.getElementById("cart-list")
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	cartList.innerHTML = ""
	cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="removeFromCart(${product.id})">Remove from Cart</button>`;
    cartList.appendChild(li);
  });
	sessionStorage.setItem("cart",JSON.stringify(cart))
}

// Add item to cart
function addToCart(productId) {
  let product = products.find(product => product.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }

}

// Remove item from cart
function removeFromCart(productId) {
	cart = cart.filter((ele)=>ele.id !== productId)
	renderCart()
}

// Clear cart
function clearCart() {
	cart = []
	renderCart()
}

// Initial render
renderProducts();
renderCart();