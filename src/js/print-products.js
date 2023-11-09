import { UpToLocalStorageProducts } from "./fetch.js";

// Función para obtener datos de sessionStorage
const getProductsFromSessionStorage = () => {
    const productsData = sessionStorage.getItem("Products");
    return JSON.parse(productsData);
};

// Función para crear una tarjeta individual
const crearTarjeta = (producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetita");

    const imagen = document.createElement("img");
    imagen.classList.add("img-tarjetita");
    imagen.src = producto.imagen;
    imagen.alt = "";

    const titulo = document.createElement("h4");
    titulo.classList.add("title-tarjetita");
    titulo.textContent = producto.title;

    const parrafo = document.createElement("p");
    parrafo.classList.add("parrafo-tarjetita");
    parrafo.textContent = producto.descripcion;

    const precio = document.createElement("span");
    precio.classList.add("price");
    precio.textContent = `$${producto.precio}`;

    const boton = document.createElement("button");
    boton.classList.add("add-cart-btn");
    boton.textContent = "Add Cart";

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(parrafo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    return tarjeta;
};

// Función para crear tarjetas y agregarlas al contenedor
const crearTarjetas = (productos) => {
    const contenedor = document.querySelector(".contenedor-tarjetas");
    contenedor.innerHTML = ""; // Limpiar el contenedor

    productos.forEach((producto) => {
        const tarjeta = crearTarjeta(producto);
        contenedor.appendChild(tarjeta);
    });
};
// Función principal para cargar productos desde sessionStorage y crear tarjetas
const cargarProductos = () => {
    const productos = getProductsFromSessionStorage();
    if (productos && productos.length > 0) {
        crearTarjetas(productos);
    } else {
        console.error("No se encontraron productos en sessionStorage");
    }
};

const generarTarjetasDesdeStorage = async () => {
    try {
        // Actualizar los productos en el sessionStorage desde la API
        await UpToLocalStorageProducts();

        cargarProductos();
    } catch (error) {
        console.error(
            "Error al generar las tarjetas desde el sessionStorage:",
            error
        );
    }
};

export { generarTarjetasDesdeStorage }