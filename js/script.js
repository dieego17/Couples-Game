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
let visor_tama = document.getElementById("visor_tama"); 

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


//OCULTAR CAPAS Y CARGAR IMÁGENES
document.addEventListener("DOMContentLoaded", () =>{
    juego.classList.add("displaynone")
    finjuego.classList.add("displaynone")
    btn_comprobar.classList.add("displaynone")
    btn_nueva_partida.classList.add("displaynone")

})

//SELECCIONA NUM CARTAS
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
        element.nextElementSibling.classList.add("seleccionado");
        numeroimagenesseleccionado = element.nextElementSibling;
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

//SELECCIONA IMAGEN CARTAS
let imagenesseleccionado = null;
let typeImage
//Evento elegir el número de cartas.
const imageCartas = (event) => {

    let element = event.target;

    if(element.nodeName === "IMG"){
        typeImage = event.target.src;
        if(imagenesseleccionado){
            imagenesseleccionado.classList.remove("carta-seleccionada");
        }
        element.classList.add("carta-seleccionada");
        imagenesseleccionado = element;
        configuracion_cartas.classList.remove("error");
    }

}

config_card_body.addEventListener("click", imageCartas);



//SELECCIONA TIEMPO DE JUEGO
let numerotimeseleccionado = null;
let numtime
//Evento elegir el número de cartas.
const numberTime = (event) => {

    let element = event.target;

    if(element.nodeName === "INPUT"){
        numtime = event.target.value;
        if(numerotimeseleccionado){
            numerotimeseleccionado.classList.remove("seleccionado");
        }
        element.nextElementSibling.classList.add("seleccionado");
        numerotimeseleccionado = element.nextElementSibling;
        tiempo.classList.remove("error");
    }

}


visor_tiempo.addEventListener("click", numberTime);


//SELECCIONA NIVEL AYUDA
let numerohelpeleccionado = null;
let numhelp
//Evento elegir el número de cartas.
const numberHelp = (event) => {

    let element = event.target;

    if(element.nodeName === "INPUT"){
        numhelp = event.target.value;
        if(numerohelpeleccionado){
            numerohelpeleccionado.classList.remove("seleccionado");
        }
        element.nextElementSibling.classList.add("seleccionado");
        numerohelpeleccionado = element.nextElementSibling;
        ayuda.classList.remove("error");
    }

}

visor_ayuda.addEventListener("click", numberHelp);

let imagenUsada = []
let imgRep = false;

//evento para validar el juego
const validateGame = (event) =>{

    if(!numimagenes){
        configuracion_tama.classList.add("error")
    }
    if(!typeImage){
        configuracion_cartas.classList.add("error")
    }
    if(!numtime){
        tiempo.classList.add("error")
    }
    if(!numhelp){
        ayuda.classList.add("error")
    }
    if(numimagenes && typeImage && numtime && numhelp){
        configurador.classList.add("displaynone")
        juego.classList.remove("displaynone")
        btn_validar.classList.add("displaynone")
        btn_comprobar.classList.remove("displaynone")
        generarJuego()

    }
}

btn_validar.addEventListener("click", validateGame)

//GENERAR JUEGO
function generarJuego(){
    for(let i = 0; i < numimagenes; i++){
        const img = document.createElement("IMG");
        img.className = "visor_imagenes_juego"
        img.src = typeImage;
        img.className = "config-card__card"
        img.classList.add("carta_elegida")
        visor_imagenes_juego.appendChild(img);
        //PULSAR IMAGENES PARA SACAR ANIMALES
        const clickCartas = () =>{

            let imgAle = Math.floor(Math.random()*imagenes_animales.length);
            let animalesImg = imagenes_animales[imgAle]
            img.src = "./assets/images/animales/"+animalesImg

        }
        img.addEventListener("click", clickCartas)

    }
        
} 


//COMPROBAR REPETIDAS
function repetidas(event) {
    const imagenes = document.querySelectorAll('.carta_elegida');
    const srcArray = [];

    let hayrepetidas = false;

    imagenes.forEach(imagen => {
        const src = imagen.src;

        if (srcArray.includes(src)) {
            hayrepetidas = true;
        } else {
            srcArray.push(src);

        }
    });

    if (hayrepetidas) {
        const nivelsin = visor_ayuda.querySelector('input[type="radio"][value="sin"]')
        const nivelmedio = visor_ayuda.querySelector('input[type="radio"][value="medio"]')
        const nivelalto = visor_ayuda.querySelector('input[type="radio"][value="alto"]')
        if (nivelmedio.checked) {
            btn_comprobar.style.backgroundColor = "red"

            setInterval(function () {
                btn_comprobar.style.backgroundColor = "transparent"
            }, 2000)
        }

        else if (nivelsin.checked) {
            btn_comprobar.style.backgroundColor = "transparent"
        }

        else if (nivelalto.checked) {
           
        }



    } else {
        finjuego.style.display = "block";
        juego.style.display = "none";
        btn_comprobar.style.display = "none"
        btn_nueva_partida.style.display = "block"
    }
}

btn_comprobar.addEventListener("click", repetidas)

//Recargar partida
function recargar() {
    location.reload()

}

btn_nueva_partida.addEventListener("click", recargar)