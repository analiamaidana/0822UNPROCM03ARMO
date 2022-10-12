console.log( "probando objetos literales");
// diferencia entre arrays y objetos literales

let colores= ["blanco", "azul", "rosa"];
let dni= [30665778, 45678910, 445213980];

let usuario1= ["Juan", "Garcia", 22, "CABA"];
let usuario2= ["perez", "NICOLAS", "Cordoba", 45];

console.log(usuario1[2]);

let usuario3= {
    nombre: "Rosario",
    apellido: "Esquivel",
    edad: 22,
    nacionalidad: "argentina",
    saludar: function(){
        return "Hola soy " + this.apellido
    }
};
console.log(usuario3.saludar());

//ejemplo de array de objetos literales con this

let cantante1 = {
    apellido: "eilish",
    nombre: "billie",
    nacionalidad: "EEUU",
    edad: 23,
}
let cantante2={
    nombre: "Diego",
    apellido: "Torres",
    edad: 45,
    nacionalidad: "argentino"
}

console.log (cantante2.nombre)
console.log (cantante1.nombre)

let teamLolla = [
    {
    nombre: "Diego",
    apellido: "Torres",
    edad: 45,
    nacionalidad: "argentino"
    },
    {apellido: "eilish",
    nombre: "billie",
    nacionalidad: "EEUU",
    edad: 23
}
];

console.log(teamLolla[1].apellido);
//ejercicio 1

let diegoTorres = {
    nombre: "Diego",
    apellido: "Torres",
    dni: 14678910,
    comidasFavoritas: ["asado", "sushi", "pizza"],
    edad: 45,
    saludar: function(){
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + "y tengo " + this.edad +"años. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
}
console.log(diegoTorres.saludar());

//ejercicio 2
let auto = {
    marca: "ford",
    modelo: "fiesta",
    anio:2005 ,
    color: "azul",
    posicion: 0,
    avanzar: function(n){
        this.posicion= this.posicion+n
        return this.posicion
    },
    retroceder: function (n){
        this.posicion= this.posicion-n
        return this.posicion
    }

}
auto.avanzar(10);
auto.retroceder (5);
console.log(auto.posicion);

let nuevoAuto ={
    marca: "ford",
    modelo: "fiesta",
    anio:2005 ,
    color: "azul",
    posicion: 0,
    moverse: function(n){
        this.posicion= this.posicion+n
        return this.posicion
    },
}
nuevoAuto.moverse (100);
nuevoAuto.moverse(-50);
console.log(nuevoAuto.posicion);

//EJERCICIO SUPERHEROES

let ironMan ={
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function (n){
        this.energia= this.energia - 10
        return "Poder Elegido de" + this.nombre + " : "+this.poderes[n]+ ". Energía restante:" + this.energia
    }
}
let hulk ={
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function (n){
        this.energia= this.energia - 10
        return "Poder Elegido de" + this.nombre + " : "+this.poderes[n]+ ". Energía restante:" + this.energia
    }
}

console.log(ironMan.getPoder(1));
console.log(ironMan.getPoder(2));
console.log(hulk.getPoder(0));