'use strict';
/*. Crea un script para mostrar el factorial de un número introducido por el usuario. Se deberá hacer
utilizando un bucle while. */
let num = parseInt(prompt("Introduce un número"));
let res = num;
while(num > 1)
{
    if(num != 1)
    {
        num--;
        res = res * num;
    } 
}
alert("El factorial del número introducido es: " + res);