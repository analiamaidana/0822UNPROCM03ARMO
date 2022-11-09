//lista de favoritos

// 1 - recuperar el storage 
let recuperoStorage= localStorage.getItem("favoritos");
console.log(recuperoStorage);

//2 - tengo que transformar de JSON a array
let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

// 3 - captura el contenedor de los elementos a mostrar
let lista= document.querySelector (".favoritos");

// 4 - evaluar si el localStorage está vacío quiero indicarle al usuario que no hay favoritos seleccionados
if (seleccionados == null || seleccionados.length == 0){
    lista.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    // pedir a la api los dotos de todos los ids del array de personajes elegidos
    for (let i= 0; i<seleccionados.length; i++){
        buscarYMostrarFavoritos(seleccionados[i])
    }
}
function buscarYMostrarFavoritos (id){
    //fetch
    let url = `https://rickandmortyapi.com/api/character/${id}`

    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            lista.innerHTML += `<article>
                            <img src="${data.image}">
                            <p> Nombre: ${data.name}</p>
                            
                            </article>`
        })
        .catch(function(e){
            console.log(e);
        })


}