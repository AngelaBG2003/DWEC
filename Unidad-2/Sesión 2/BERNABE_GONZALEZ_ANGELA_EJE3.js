'use strict';
/* Crea un script que pregunte al usuario el número de hermanos y una cantidad. Si el usuario tiene tres
hermanos o más se aplicará un descuento del 15% a la cantidad, si tiene menos, un 5% y si no tiene
hermanos se mostrará la cantidad sin descuento*/
let cantidad = prompt("Dime una cantidad:");
let hermanos = prompt("Cuantos hermanos tienes?");
if (hermanos >= 3) {
    cantidad = cantidad - (cantidad * 0.15);
}
else if (hermanos > 0) {
    cantidad = cantidad - (cantidad * 0.05);
}
alert("Tu cantidad final es: " + cantidad);