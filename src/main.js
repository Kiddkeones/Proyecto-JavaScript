import { addToCartBtn } from "./js/btn-product.js";
import { generarTarjetasDesdeStorage } from "./js/print-products.js";

async function main() {
    //Toma la data del storage y las imprime
    await generarTarjetasDesdeStorage();

    //Funcionalidad del button añadir producto al carrito
    addToCartBtn();
}

main();
