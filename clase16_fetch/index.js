// console.log("Hola");

// Primer fetch
/*let url= "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"

fetch (url)
    .then (function (response){
        return response.json()
    })
    .then (function (data){
        //console.log(data);
        let provincias = data.provincias;
        let lista = document.querySelector(".lista");
        for (let i=0; i<provincias.length; i++){
            lista.innerHTML += `<li>${provincias[i].nombre}</li>`
        } 
    })
    .catch(function(error){
        console.log(error)
    })
*/
// fetch con un solo dato

let ruta= "https://randomuser.me/api/";

fetch(ruta)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //console.log(data);
        let user = data.results [0];

        let avatar = document.querySelector(".avatar");
        let nombre= document.querySelector(".nombre");
        let email= document.querySelector(".email");

        avatar.src = user.picture.medium;
        nombre.innerHTML += `${user.name.title} ${user.name.first}${user.name.last}`;
        email.innerHTML += user.email;

    })
    .catch (function(e){
        console.log(e);
    })