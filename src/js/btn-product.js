export const addToCartBtn = () => {
    const addCartButtons = document.querySelectorAll(".add-cart-btn");
    
    addCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            Toastify({
                text: "Añadido al Carrito",
                duration: 1000,
                gravity: "top",
                position: "left",
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #111, #111)",
                  borderRadius: "2rem"
                },
                onClick: function(){}
              }).showToast();

            const productCard = button.parentNode;
            const title =
                productCard.querySelector(".title-tarjetita").innerText;
            const price = productCard.querySelector(".price").innerText;

            const productDetails = {
                title,
                price,
                quantity: 1,
            };

            const cart = JSON.parse(localStorage.getItem("cart")) || {};

            if (cart[`product_${index}`]) {
                cart[`product_${index}`].quantity++;
            } else {
                cart[`product_${index}`] = productDetails;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
}


