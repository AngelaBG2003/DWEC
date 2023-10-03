'use strict';
/*. Crea un script que pregunte al usuario por el número de un mes y muestre los días que 
tiene ese mes o un mensaje de error en caso de número de mes incorrecto. 
Se deberá realizar mediante una sentencia switch.*/
let num = parseInt(prompt("Dime el número de un mes:"));
switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
       alert("El mes " + num + " tiene 31 días");
       break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("El mes " + num + " tiene 30 dias");
        break;
    case 2:
        alert("El mes " + num + " tiene 28 días, a no ser que sea año bisiesto, en ese caso tiene 29");
        break;
    default:
        alert("Valor de mes incorrecto")
}