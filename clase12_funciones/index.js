console.log("Hola");

//variables
let nombre= "Ana"; //string
let number= 22; // numérico
let aprobado= true; //boolean
let especial= null; //especiales

let colores = ["blanco", "rojo", "azul"];
let paises= ["Brasil", "Argentina", "Uruguay"];
let favoritos= [colores, paises];
console.log(colores[2]);

console.log (colores.length)
colores.push ("verde");
console.log(colores);
paises.pop();
console.log(paises);

//Funciones
let nombres = ["facu", "ana", "cande"]
function saludo (nombre, apellido){
    return "Hola"+ " " + nombre +" " +  apellido;
}
console.log(saludo("facu", "romano"));

// scope
let num1=90; //variable con scope global
function sumar (numero){
    return numero
}
console.log(sumar(num1)+4);
console.log(num1);

// practica
function rectangulo (base, altura){
    return base * altura
}
console.log(rectangulo (20,50));

function triangulo (base, altura){
    return (base * altura) / 2
}
console.log(triangulo (10,5));

function largoDelArray (unArrayCualquiera){
    return unArrayCualquiera.length
}
let numeros= [1,2,3,4,5];
console.log(largoDelArray(numeros));

function dolarHoy (pesos){
    return pesos/282
}
console.log (dolarHoy(1000));
