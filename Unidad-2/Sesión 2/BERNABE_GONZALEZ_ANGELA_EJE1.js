'use strict';
/*Crea un script que determine si un número introducido por el usuario es par o impar utilizando el
operador condicional*/
let num = parseInt(prompt("Dime un número:"));
let res = (num%2 == 0 || num == 0) ? "par" : "impar";
alert("El número introducido es " + res)