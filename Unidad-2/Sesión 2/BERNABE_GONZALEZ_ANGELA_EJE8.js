'use strict';
/*Muestra en pantalla con un mensaje los números pares del 25 al 1 
utilizando un bucle for.
 */
let res = "";
for(let i = 25; i > 0; i--)
{
    let par = (i % 2 == 0) ? res = res + " " + i : "";
}
alert("Los números pares entre 25 y 1 son : " + res)