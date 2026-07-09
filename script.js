const cielo = document.getElementById("sky");

const popup = document.getElementById("popup");
const mensaje = document.getElementById("mensaje");
const cerrar = document.getElementById("cerrar");

const mensajes = [

    "Cada vez que hablo contigo es calma para mi alma",

    "Como siempre soñe, por azar te encontre",

    "Quiero seguir conociendo cada rincon de tu ser",

    "Cada mañana espero un mensaje tuyo",

    "Cada conversación contigo es un tesoro para mi",

    "Ojalá este sea el comienzo de muchos momentos y recuerdos:3"

];

for(let i=0;i<250;i++){

    const estrella=document.createElement("div");

    estrella.classList.add("star");

    estrella.style.left=Math.random()*100+"%";

    estrella.style.top=Math.random()*100+"%";

    const tamaño=Math.random()*3+1;

    estrella.style.width=tamaño+"px";

    estrella.style.height=tamaño+"px";

    estrella.style.animationDelay=Math.random()*5+"s";
    
    estrella.dataset.mensaje =
         mensajes[i % mensajes.length];

    estrella.addEventListener("click",()=>{

        const texto = estrella.dataset.mensaje;

        mensaje.textContent = texto;

        popup.classList.remove("oculto");

        estrella.style.background = "#FFD700";

        estrella.style.boxShadow =
        `
        0 0 10px gold,
        0 0 25px gold
        `;

    });

    cielo.appendChild(estrella);

}

cerrar.addEventListener("click",()=>{

    popup.classList.add("oculto");

});

function crearEstrellaFugaz(){

    const estrella = document.createElement("div");

    estrella.classList.add("shooting-star");

    estrella.style.top = Math.random()*200 + "px";

    estrella.style.left = "100%";

    cielo.appendChild(estrella);

    setTimeout(()=>{

        estrella.remove();

    },2000);

}

setInterval(crearEstrellaFugaz,7000);

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");
let sonando = false;

btnMusica.addEventListener("click", () => {

    if (sonando) {
        musica.pause();
        btnMusica.textContent = "🎵";
    } else {
        musica.play();
        btnMusica.textContent = "🔇";
    }

    sonando = !sonando;

});

const indiceSecreta = Math.floor(Math.random() * 250);

// dentro del for, después de crear "estrella":
if (i === indiceSecreta) {
    estrella.classList.add("secreta");
    estrella.dataset.mensaje = "Este es tu mensaje especial, único 💫";
}