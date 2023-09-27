'use strict';
/*Realiza un pequeño adivinador de manera que primero le pida al usuario un número y, después, otro
usuario diferente (supuestamente) deberá adivinarlo. El programa da pequeñas pistas al usuario que tiene que
adivinarlo indicando si el número buscado es más pequeño o más mayor que el introducido */
let num1 = parseInt(prompt("Usuario 1, dime un número"));
let num2 = parseInt(prompt("Usuario 2, dime un número"));
while(num2 != num1)
{
    let ayuda = (num2 > num1) ? "El número que has puesto es mas grande" :
    "El número introducido es mas pequeño";
    alert(ayuda);
    num2 = parseInt(prompt("Usuario 2, dime un número"));
}
alert("Muy bien Usuario 2! Lo has adivinado!!!!");