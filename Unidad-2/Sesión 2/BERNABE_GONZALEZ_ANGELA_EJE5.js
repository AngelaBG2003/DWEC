'use strict';
/* Crea un script que pregunte al usuario por un número y determine si es par, impar, si es múltiplo de 3 o si
es múltiplo de 5. Después, se deberá mostrar el resultado en una línea.
*/
let num = parseInt(prompt("Dime un número entero:"));
let par = (num % 2 == 0) ? " es par" : " es impar";
let mul3 = (num % 3 == 0) ? ", es múltiplo de 3" : "";
let mul5 = (num % 5 == 0) ? ", es múltiplo de 5" : "";
alert("El número " + num + par + mul3 + mul5);