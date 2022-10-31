let miNombre = "ana";
localStorage.setItem ("userName", miNombre);
console.log(localStorage);
let recuperoStorage = localStorage.getItem("userName");
console.log(recuperoStorage);
localStorage.clear();

// 2do ejercicio
let peliculasFavoritas= ["uno", "dos", "tres"];

localStorage.setItem("peliculaFavorita", peliculasFavoritas[1]);
console.log(localStorage);

let recuperoDato= localStorage.getItem("peliculaFavorita");
console.log(recuperoDato);
localStorage.clear();
// 3ro

let peliculasJson = JSON.stringify(peliculasFavoritas);
localStorage.setItem("favoritos", peliculasJson);
console.log(localStorage);
//4to
let recupero= localStorage.getItem("favoritos");
let recuperados= JSON.parse(recupero);
recuperados.push("cuatro");
console.log(recuperados);
let transformado= JSON.stringify(recuperados);
localStorage.setItem("favoritos", transformado);
console.log(localStorage);

// 5to

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19,
        ciudad: "Dragonstone"
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];
let winterIsComing = [];
for (let i=0; i<got.length; i++){
    if (got[i].ciudad==="Winterfell"){
        winterIsComing.push(got[i].nombre)
    }
}
let transformacion= JSON.stringify(winterIsComing);
localStorage.setItem("winterfell", transformacion);
console.log(localStorage); 