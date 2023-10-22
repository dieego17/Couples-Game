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

juego.style.display = "none";
finjuego.style.display = "none"
btn_comprobar.style.display = "none";
btn_nueva_partida.style.display = "none";

//Evento elegir el número de cartas.
const numberCards = (event) => {

    let element = event.target;
    let cartas;
    let hijo = element.nextElementSibling;
    let padre = element.previousElementSibling;


    if(element.tagName === "INPUT"){
        if(element.value === "10"){
            hijo.classList.add("seleccionado"); 
        }else if(element.value === "12"){
            padre.classList.remove("seleccionado");
            hijo.classList.add("seleccionado");
        }else if(element.value === "14"){
            padre.classList.remove("seleccionado");
            hijo.classList.add("seleccionado");
        }else if(element.value === "16"){
            padre.classList.remove("seleccionado");
            hijo.classList.add("seleccionado");
        }else if(element.value === "18"){
            padre.classList.remove("seleccionado");
            hijo.classList.add("seleccionado");
        }else if(element.value === "20"){
            padre.classList.remove("seleccionado");
            hijo.classList.add("seleccionado");
        }
    }


}

visor_tama.addEventListener("click", numberCards);

//Evento donde se cargan las imagenes
const loadImg = (event) =>{

    for(let i = 0; i < imagenes_cartas.length; i++){
        let img = document.createElement("IMG");
        img.src = "./assets/images/cartas/"+imagenes_cartas[i];
        img.style.width = "100px";
        img.style.height = "120px";
        img.style.padding = "5px";
        config_card_body.appendChild(img);
    }

}

document.addEventListener("DOMContentLoaded", loadImg);

//evento para esciger la imagen de la carta
let imagenSeleccionada = null; // Variable de la imagen seleccionada 

const selectImg = (event) => {
    let element = event.target;

    if (element.tagName === "IMG") {
        if (imagenSeleccionada) {
            // Si hay una imagen seleccionada previamente, elimina su borde
            imagenSeleccionada.style.border = "none";
        }

        let hermanomenor = element.previousElementSibling;
        let hermanomayor = element.nextElementSibling;

        // Agrega un borde rojo solo a la imagen actual
        element.style.border = "2px solid red";
        // Actualiza la imagen seleccionada
        imagenSeleccionada = element;
    }
}

config_card_body.addEventListener("click", selectImg);


