window.addEventListener("load", function(){

    console.log("hola")
    
    //eventos
    //capturo el elemento
    let titulo = document.querySelector(".main");
    //definir el evento y lo que queremos que suceda
    titulo.addEventListener("click", function(){
        //cambiar el color del titulo 
        titulo.style.color= "red"
    });
    //capturo el elemento
    let link=document.querySelector("a");
    //preguntarle al usuario si realmente quiere ir a la otra pagina
    link.addEventListener("click", function(evento){
        evento.preventDefault();
        let respuesta= confirm("¿Realmente queres abandonar la página?");
        if (respuesta == false){
            alert("que bueno que te quedas");
        } else {
            window.open(this)
        }
    })
    //Dark mode
    let button= document.querySelector("button");
    let body= document.querySelector("body");
    button.addEventListener("click", function(){
        if(button.innerText== "Dark Mode"){
            body.style.background = "#444";
            body.style.color="#ccc";
            link.style.color= "#ccc";
            this.innerText= "Ligth Mode"
        } else {
            body.style.background= "#fff";
            body.style.color="#000";
            link.style.color= "#000";
            this.innerText= "Dark Mode";
        }
    })
    // guardar el titulo en el localStorage
    let save= document.querySelector(".save");
    
    save.addEventListener("click", function(){
        let textoTitulo= titulo.innerText;
        console.log((textoTitulo));
        let soloTitulo= JSON.stringify(textoTitulo);
        console.log(soloTitulo);
        localStorage.setItem("tituloPagina", soloTitulo);
        console.log(localStorage);
    })
    
    })