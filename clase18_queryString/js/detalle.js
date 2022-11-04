let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()
console.log(id);

let url = `https://rickandmortyapi.com/api/character/${id}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let title = document.querySelector('h1');
        let imagen = document.querySelector('img');
        let status = document.querySelector('.status');
        let species = document.querySelector('.species');
        let gender = document.querySelector('.gender');

        title.innerText += data.name;
        imagen.src=data.image;
        status.innerText += data.status;
        species.innerText += data.species;
        gender.innerText += data.gender;

        
    })
    .catch(function(error){
        console.log(error);
    })
