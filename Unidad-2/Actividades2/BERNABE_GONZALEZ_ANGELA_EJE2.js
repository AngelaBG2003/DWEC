'use strict';
/*Crea un script que pregunte al usuario dónde vive y su edad. Si vive en Alicante y tiene entre 18 y 35 años
el script debe mostrar en pantalla que el usuario puede acceder al carnet de empresarios emprendedores en
caso contrario indicar que no puede acceder a él.*/
let lugar = prompt("En que ciudad vives?");
let edad = parseInt(prompt("Cuantos años tienes"));
let condi = ((lugar == "Alicante" || lugar == "alicante") && (edad >= 18 || edad <= 35)) ? 
"Usted  puede acceder al carnet de empresarios emprendedores" : 
"No puedes usar el carnet de emprendedores";
alert(condi);
