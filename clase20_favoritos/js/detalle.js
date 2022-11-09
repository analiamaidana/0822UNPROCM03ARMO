let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let url = `https://rickandmortyapi.com/api/character/${id}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let section = document.querySelector('.detalle')

        section.innerHTML += `<article>
                                <h2>Nombre: ${data.name}</h2>
                                <img src="${data.image}">
                                <p> Status: ${data.status}</p>
                                <p> Especie: ${data.species}</p>
                                <p> Genero: ${data.gender}</p>
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })

// 1 - crear un array para ir completando con datos
let favoritos = [];

// 2 - recupero datos del storage
let recuperoStorage = localStorage.getItem("favoritos");

// 3 - chequeo y agrego info del localStorage en el array
if (recuperoStorage != null){
    // transformar el dato en formato JSON a un tipo de dato que podamos trabajar en javascript
    favoritos= JSON.parse(recuperoStorage);
    console.log(favoritos);
}

// 4 - capturo elemento del DOM que se refiere a favoritos
let link= document.querySelector(".clave");

// 5 - chequear que el id esté en el array para poder cambiar el texto al usuario
if (favoritos.includes(id)){
    link.innerText = "Sacar de favoritos"
};
console.log(link);
// 6 - cuando el usuario haga click en agregar a favoritos => agregue ese id dentro del array

//Definir un evento para ese elemento del DOM
link.addEventListener("click", function(e){
    //evito comportamiento por default
    e.preventDefault();
    if (favoritos.includes(id)){
        // si el id está en el array
        let indice= favoritos.indexOf(id);
        // borrar a partir de este número índice, un elemento
        favoritos.splice(indice, 1);
        link.innerText= "Agregar a favoritos";
    } else {
        // agregue un dato al array
        favoritos.push(id);
        console.log(favoritos)
        link.innerText= "Sacar de favoritos"
    }
    //para guardar el array en el localStorage antes debo transformarlo a JSON
    let personajesFavoritosToString= JSON.stringify(favoritos);
    localStorage.setItem("favoritos", personajesFavoritosToString);
    console.log(localStorage);
})