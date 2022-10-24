/* 
let comidasFavoritas = ["Milanesas", "Ravioles", "Asado"];
*/
/*console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);

for (let i=0; i<comidasFavoritas.length; i++){
    console.log(comidasFavoritas[i])
};

for (let i=100; i>0 ; i--){
    console.log(i)
}; 
*/
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
        edad: 19
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
]

for (let i=0; i<got.length; i++){
    console.log ("Soy " + got[i].nombre + " " + got[i].apellido + " de la ciudad "+ got[i].ciudad)
}

