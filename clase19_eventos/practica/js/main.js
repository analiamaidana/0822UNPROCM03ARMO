window.addEventListener('load', function () {

    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('.bienvenida article span');
    let bienvenida = document.querySelector('.bienvenida');
    let personajes = document.querySelector('.personajes');

    titulo.addEventListener('mouseover', function () {
        let nombre = prompt('Cómo te llamas?');

        if (!nombre) {
            saludo.innerText = 'Bienvenido';
        } else {
            saludo.innerText = `Bienvenido ${nombre}`;
            saludo.style.textTransform = 'uppercase';
        }

        titulo.style.display = 'none';
        span.style.display = 'block';
    });

    span.addEventListener('click', function () {
        bienvenida.style.display = 'none';
        personajes.style.display = 'flex';
    })

    
})