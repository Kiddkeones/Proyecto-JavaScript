import { addToCartBtn } from "./js/btn-product.js"
import { UpToLocalStorageProducts } from "./js/fetch.js"

function main () {
    UpToLocalStorageProducts()
    addToCartBtn()
}

main()
