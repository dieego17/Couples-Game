let imagenes_animales = ["cabra.jpg", "cerdo.jpg", "conejo.png", "conejo2.jpg", "cordero.png", "elefante.jpg", "erizo.jpg", "gato.png", "jirafa.png", "leon.png", "mono.jpg", "oso.jpg", "osoblanco.png", "osopanda.png", "pato.png", "perro.png", "pollo.png", "pradera.jpg", "tigre.jpg", "vaca.png", "tucan.jpg", "loro.jpg", "cigueña.jpg", "foca.jpg", "koala.jpg", "cebra.jpg", "canguro.jpg", "pinguino.jpg", "zorro.jpg", "potro.jpg", "tortuga.jpg", "lobo.jpg"];

let imagenes_cartas = ["atras1.jpg", "atras2.jpg", "atras3.jpg", "atras4.jpg", "atras5.jpg", "atras6.jpg", "atras7.jpg", "atras8.jpg"];

let header_title = document.getElementById("header_title");
let configurador = document.getElementById("configurador");
let juego = document.getElementById("juego");
let tiempo = document.getElementById("tiempo");
let ayuda = document.getElementById("ayuda");
let botones = document.getElementById("botones");
let finjuego = document.getElementById("finjuego");

let configuracion_tama = document.getElementById("configuracion_tama");
let configuracion_cartas = document.getElementById("configuracion_cartas");
let configuracion_juego = document.getElementById("configuracion_juego");
let configuracion_ayuda = document.getElementById("configuracion_ayuda");

let config_card_body = document.getElementById("config_card_body");
let visor_imagenes_juego = document.getElementById("visor_imagenes_juego");
let visor_marcador = document.getElementById("visor_marcador");
let visor_tiempo = document.getElementById("visor_tiempo");
let visor_ayuda = document.getElementById("visor_ayuda");

let btn_comprobar = document.getElementById("btn_comprobar");
let btn_validar = document.getElementById("btn_validar");
let btn_nueva_partida = document.getElementById("btn_nueva_partida");


let imagenes = document.getElementsByTagName("img");
let visor_tama = document.getElementById("visor_tama");

document.addEventListener("DOMContentLoaded", ()=>{

    juego.classList.add("ocultar");
    finjuego.classList.add("ocultar");
    btn_comprobar.classList.add("ocultar");
    btn_nueva_partida.classList.add("ocultar");

})

let numeroimagenesseleccionado = null;
let numimagenes
//Evento elegir el número de cartas.
const numberCards = (event) => {

    let element = event.target;

    if(element.nodeName === "INPUT"){
        numimagenes = event.target.value;
        if(numeroimagenesseleccionado){
            numeroimagenesseleccionado.classList.remove("seleccionado");
        }
        event.target.nextElementSibling.classList.add("seleccionado");
        numeroimagenesseleccionado = event.target.nextElementSibling;
        configuracion_tama.classList.remove("error");
    }

}

visor_tama.addEventListener("click", numberCards);

//Evento donde se cargan las imagenes
const loadImg = (event) =>{
    
    for(let i = 0; i < imagenes_cartas.length; i++){
        let div = document.createElement("DIV");
        div.className = "config-card__card";
        config_card_body.appendChild(div);
        let img = document.createElement("IMG");
        img.src = "./assets/images/cartas/"+imagenes_cartas[i];
        img.className = "config-card__img";
        div.appendChild(img);
    }

}

document.addEventListener("DOMContentLoaded", loadImg);

//evento para escoger la imagen de la carta
let imagenSeleccionada = null; // Variable de la imagen seleccionada 
let imagenselec;
const selectImg = (event) => {
    let element = event.target;

    if (element.tagName === "IMG") {
        if (imagenSeleccionada) {
            imagenselec = event.target
            // Si hay una imagen seleccionada previamente, elimina su borde
            imagenSeleccionada.classList.remove("carta-seleccionada");
        }

        // Agrega un borde rojo solo a la imagen actual
        element.classList.add("carta-seleccionada");
        // Actualiza la imagen seleccionada
        imagenSeleccionada = element;
        configuracion_cartas.classList.remove("error");
    }
}

config_card_body.addEventListener("click", selectImg);



//Evento elegir el tiempo.
let tiemposeleccionado = null;
let numecartas
const selectTime = (event) => {

    let element = event.target;


    if(element.nodeName === "INPUT"){
        numecartas = event.target.value;
        if(tiemposeleccionado){
            tiemposeleccionado.classList.remove("seleccionado");
        }
        event.target.nextElementSibling.classList.add("seleccionado");
        tiemposeleccionado = event.target.nextElementSibling;
        tiempo.classList.remove("error");
    }

}

visor_tiempo.addEventListener("click", selectTime);

//Evento elegir el nivel de ayuda.
let ayudaseleccionada = null;
let numayuda
const selectHelp = (event) => {

    let element = event.target;
    if(element.nodeName === "INPUT"){
        numayuda = event.target.value;
        if(ayudaseleccionada){
            ayudaseleccionada.classList.remove("seleccionado");
        }
        event.target.nextElementSibling.classList.add("seleccionado");
        ayudaseleccionada = event.target.nextElementSibling;
        ayuda.classList.remove("error");
    }

}

visor_ayuda.addEventListener("click", selectHelp);

//evento para validar el juego
const validateGame = (event) =>{

    if(!numimagenes){
        configuracion_tama.classList.add("error")
    }
    if(!imagenselec){
        configuracion_cartas.classList.add("error")
    }
    if(!numecartas){
        tiempo.classList.add("error")
    }
    if(!numayuda){
        ayuda.classList.add("error")
    }
}

btn_validar.addEventListener("click", validateGame)