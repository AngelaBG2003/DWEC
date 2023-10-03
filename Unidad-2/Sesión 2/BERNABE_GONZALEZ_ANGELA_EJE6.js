'use strict';
/*. Crea un script que pida al usuario dos números y una operación (el carácter +,-,*o /). El script debe
resolver el resultado de la operación seleccionada por el usuario.  */
let num1 = parseInt(prompt("Dime el primer número"));
let num2 = parseInt(prompt("Dime el segundo número"));
let ope = prompt("Diem la operación a realizar: +, -, * o /");
let resu;
switch(ope){
    case "+":
        resu = num1 + num2;
        break;
    case "-":
        resu = num1 - num2;
        break;
    case "*":
        resu = num1 * num2;
        break;
    case "/":
        resu = num1 / num2;
        break;
    default:
        alert("Valor de operador incorrecto")
}
alert(num1 + " " + ope + " " + num2 + " = " + resu);