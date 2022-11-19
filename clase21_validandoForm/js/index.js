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
                                <a href='detalle.html?id=${info[i].id}'><p>Name: ${info[i].name}</p></a>
                                <p>Status: ${info[i].status} </p>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })

//validacion formulario de búsqueda    
let buscador = document.querySelector(".buscador");
let formulario = document.querySelector('form');
let campoAEvaluar = document.querySelector('[name="q"]');
let alert = document.querySelector('.alert');

campoAEvaluar.addEventListener('focus',function(){
    alert.innerText = 'estas completando el campo'
})
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    if(campoAEvaluar.value == ""){
        alert.innerText = 'El campo no puede estar vacío';
    } else if( campoAEvaluar.value.length < 3){
        alert.innerText = 'Por favor ingrese más de 3 caracteres';
    } else {
        this.submit();
    }
})
//limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
campoAEvaluar.addEventListener('input', function(){
    alert.innerText = '';
});
