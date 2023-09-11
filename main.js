alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Buzo($8000)   2-Remera($5000)   3-Pantalon($8500)   4-Zapatilla($11000)"))
let seleccionarCantidad
let total = 0

const cantidad = (cant, precio) =>{
    return cant * precio
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
                seleccionarCantidad = Number(prompt("El producto seleccionado es buzo, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 8000)
            break;
        case 2:
                seleccionarCantidad = Number(prompt("El producto seleccionado es remera, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 5000)
            break;
        case 3:
                seleccionarCantidad = Number(prompt("El producto seleccionado es pantalon, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 8500)
            break;
        case 4:
                seleccionarCantidad = Number(prompt("El producto seleccionado es zapatilla, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 11000)
            break;
    
        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Buzo($8000)   2-Remera($5000)   3-Pantalon($8500)   4-Zapatilla($11000)"))
}

alert("El total de la compra es de: $" + total)

const envio = () => {
    if (total >= 20000){
        alert("El envio es gratuito")
    }else{
        total += 1000
        alert("El costo de envio es de 1000, el total es: $" + total)
    }
}

envio()

const metodoDePago = () => {
    let metodo = prompt("Ingrese el metodo de pago: tarjeta o efectivo" )
    if (metodo == "tarjeta") {
      total *= 1.1
      alert("El total es de: $" + total)
    }else if ( metodo == "efectivo") {
      total -= 1000
      alert("Tenes un descuento de 1000, el total es: $" + total)
    }  
}
  
metodoDePago()

alert("Muchas gracias por su compra, que lo disfrutes :)")