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
let recuperoStorage= localStorage.getItem("favoritos");