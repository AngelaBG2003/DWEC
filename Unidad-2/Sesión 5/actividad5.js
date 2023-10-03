'use strict';

let nom = prompt("Introduzca su nombre:");
let ape = prompt("Introduzca sus apellidos:");
let sala = parseFloat(prompt("Introduzca su salario:"));
let edad = parseInt(prompt("Introduzca su edad:"));

if(sala <= 2000)
{
    if(sala >= 1000 && sala <= 2000)
    {
        if(edad > 45)
        {
            sala = sala + (sala * 0.03);
        }
        else
        {
            sala = sala + (sala * 0.1);
        }
    }
    else
    {
        if(edad < 30)
        {
            sala = 1100;
        }
        else if(edad >= 30 && edad < 45)
        {
            sala = sala + (sala * 0.03);
        }
        else
        {
            sala = sala + (sala * 0.15);
        }
    }
}

alert("Usuario con nombre completo: " + nom + " " + ape + "\nCuya edad es: " + edad + "\nSu salario final es: " + sala.toFixed(2) );