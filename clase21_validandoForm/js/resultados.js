let query = location.search; //Obtengo la QS
let stringToObject = new URLSearchParams(query); //La trasnformo en OL
let aBuscar = stringToObject.get('q'); //Obtengo los datos de una propiedad con get()


let url = `https://rickandmortyapi.com/api/character/?name=${aBuscar}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.searchResults');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article>
                                <img src=${info[i].image} alt='' />
                                <a href='detalle.html?id=${info[i].id}'><p>Name: ${info[i].name}</p></a>
                                <p>Status: ${info[i].status} </p>
                                
                            </article>`
        }
        container.innerHTML = characters;

        
    })
        
    .catch(function(error){
        console.log(error);
    })
