alert("Ingrese la opción del producto que desea llevar. Para salir, ingrese 0.");

const productos = [
  { nombre: "Buzo", precio: 8000 },
  { nombre: "Remera", precio: 5000 },
  { nombre: "Pantalón", precio: 8500 },
  { nombre: "Zapatilla", precio: 11000 },
];

let carrito = [];
let total = 0;

const agregarAlCarrito = (producto, cantidad) => {
  carrito.push({ ...producto, cantidad });
};

const calcularSubtotal = (item) => {
  return item.cantidad * item.precio;
};

const mostrarCarrito = () => {
  alert("Carrito de compras:\n" + JSON.stringify(carrito, null, 2));
};

const mostrarTotal = () => {
  alert("El total de la compra es de: $" + total);
};

while (true) {
  let seleccionarProductos = Number(
    prompt(
      "1-Buzo($8000)\n2-Remera($5000)\n3-Pantalón($8500)\n4-Zapatilla($11000)\n0-Salir"
    )
  );

  if (seleccionarProductos === 0) {
    break; // Salir del bucle si el usuario selecciona 0
  }

  if (seleccionarProductos < 1 || seleccionarProductos > 4) {
    alert("Opción no válida. Por favor, elija una opción válida.");
    continue; // Volver al inicio del bucle
  }

  let cantidadSeleccionada = Number(prompt("Indique la cantidad"));

  if (cantidadSeleccionada <= 0 || isNaN(cantidadSeleccionada)) {
    alert("Cantidad no válida. Por favor, ingrese una cantidad válida.");
    continue; // Volver al inicio del bucle
  }

  const productoSeleccionado = productos[seleccionarProductos - 1];
  agregarAlCarrito(productoSeleccionado, cantidadSeleccionada);
}

if (carrito.length === 0) {
  alert("El carrito está vacío.");
} else {
  mostrarCarrito();
  total = carrito.reduce((acc, item) => acc + calcularSubtotal(item), 0);
  mostrarTotal();
}

const calcularCostoEnvio = () => {
  if (total >= 20000) {
    alert("El envío es gratuito.");
  } else {
    total += 1000;
    alert("El costo de envío es de 1000, el total es: $" + total);
  }
};

calcularCostoEnvio();

const procesarMetodoDePago = () => {
  let metodo = prompt("Ingrese el método de pago: tarjeta o efectivo");

  if (metodo === "tarjeta") {
    total *= 1.1;
    alert("El total es de: $" + total);
  } else if (metodo === "efectivo") {
    total -= 1000;
    alert("Tiene un descuento de 1000, el total es: $" + total);
  }
};

procesarMetodoDePago();

alert("¡Gracias por su compra! ¡Que lo disfrute! :)");