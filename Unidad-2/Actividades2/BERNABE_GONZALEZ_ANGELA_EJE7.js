'use strict';
/*7. Crea un script que pregunte constantemente números al usuario y los vaya sumando hasta que se
introduzca el número 0. Después mostrará la suma total. */
let num;
let resu = 0;
while(num != 0)
{
    num = parseInt(prompt("Dime un número:"));
    resu += num;
}
alert("La suma de los números introducidos da: " + resu);