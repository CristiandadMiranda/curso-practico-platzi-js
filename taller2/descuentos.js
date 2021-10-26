// const precio = 100;
// const descuento = 15;

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


function calcularPrecioConDescuento (precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;

}

function buttonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;

    const inputCoupons = document.getElementById("inputCoupons");
    const couponDiscount = inputCoupons.value;

    const couponsValueValid = function(coupon){
        return coupon.name === couponDiscount;
    }

    const userCoupon = coupons.find(couponsValueValid);

    if (!userCoupon) {
        alert("El cupon " + discount + " no es valido")
    } else {

        const discount = userCoupon.discount;
        const PriceDiscount = calcularPrecioConDescuento(price, discount);
        const total = price - PriceDiscount;

        const text = document.getElementById("priceP");
        text.innerText = `El precio total de el producto sin descuento es el de: $${PriceDiscount}
                          ahorraste en total: $${total}`;

    }

}


