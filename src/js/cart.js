//Codigo de pages/cart.html
const cart = document.getElementById("cart");
const productsFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

let total = 0;

for (const key in productsFromLocalStorage) {
    if (productsFromLocalStorage.hasOwnProperty(key)) {
        const product = productsFromLocalStorage[key];

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        //~> Container
        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        //~> Name
        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = product.title;

        //~> Price
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;

        //~> Quantity
        const productQuantity = document.createElement("p");
        productQuantity.classList.add("product-quantity");
        productQuantity.textContent = `x ${product.quantity}`;

        //~> Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => {
            const updatedCart = JSON.parse(localStorage.getItem("cart"));
            const product = updatedCart[key];

            if (product.quantity > 1) {
                product.quantity--;
                productQuantity.textContent = `x ${product.quantity}`;
            } else {
                updatedCart[key] = undefined;

                productDiv.remove();
            }

            localStorage.setItem("cart", JSON.stringify(updatedCart));

            total -= parseFloat(
                product.price.replace("$", "").replace(",", "")
            );
            totalElement.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
        });

        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productQuantity);
        productDetails.appendChild(deleteButton);

        productDiv.appendChild(productDetails);

        cart.insertBefore(productDiv, cart.querySelector(".total"));

        const price = parseFloat(
            product.price.replace("$", "").replace(",", "")
        );
        total += price * product.quantity;
    }
}

const totalElement = cart.querySelector(".total");
totalElement.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
