/*console.log("probando alertas");


let mensaje= "Hola Mundo";
alert (mensaje);

let mensaje2 = "indique su edad";
let resultado= prompt (mensaje2);
console.log( resultado);


let mensaje3 = "¿hoy es viernes?";
let resultado2= confirm(mensaje3);
console.log(resultado2); */

let mensaje4 = "por favor, ingrese su edad";
let edad= prompt (mensaje4);
let acceso = "";

if (edad <13){
    acceso= "prohibido"
} else if (edad <=16 ){
    acceso = " ingrese con un adulto"
} else {
    acceso = "permitido"
};

console.log(acceso);