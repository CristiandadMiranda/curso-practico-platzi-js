// const precio = 100;
// const descuento = 15;

function calcularPrecioConDescuento (precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;

}

function buttonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;

    const PriceDiscount = calcularPrecioConDescuento(price, discount);

    const text = document.getElementById("priceP");
    text.innerText = `El precio total de el producto en descuento es el de: ${PriceDiscount}`;

}
