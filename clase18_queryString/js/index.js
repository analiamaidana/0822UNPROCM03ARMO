let url = ' https://rickandmortyapi.com/api/character'

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('.characterList');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article>
                                <img src=${info[i].image} alt='' />
                                <p>Name: ${info[i].name}</p>
                                <p>Status: ${info[i].status} </p>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })
