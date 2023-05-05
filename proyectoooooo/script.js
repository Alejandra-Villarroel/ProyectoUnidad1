//cargo en un arreglo las imganes de las Series. Este sera el orden que se mostrarán
let Series = ["b.webp", "friends.webp", "gddd.jpg", "loki.jpg", "usded.jpg", "d.jpg", "p.jpg", "theend.webp", "agente.jpg", "malc.jpg", "hm.png", "hawkeye.webp", "girl.jpg", "biza.jpg", "bia.jpg", "asl1.jpg", "yo.jpg", "boy.webp", "Doogie.jpeg", "wv.jpg"];

//arreglo que guardara la opcion correcta
let correcta = [2,1,2,0,1,0,2,1,1,2,2,0,0,1,2,1,0,0,1,2];

//arreglo que guardara las opciones que se mostraran en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["Anne with an e", "Friends", "Bridgerton"]);
opciones.push(["The Big Bang Theory", "Friends", "How I Met Your Mother"]);
opciones.push(["El mesias", "El tablero", "Gambito de dama"]);
opciones.push(["Loki", "Moon Knight", "Ms. Marvel"]);
opciones.push(["Willow", "Una serie de eventos desafortunados", "Alice in Borderland"]);
opciones.push(["Dark", "Los Winchester", "Luna Nera"]);
opciones.push(["Zeke y Luther", "Los Guerreros Wasabi", "Par de reyes"]);
opciones.push(["Wolfblood", "The End of the F***ing World", "Ragnarök"]);
opciones.push(["Jessica Jones", "Agente Carter", "Capitana Carter"]);
opciones.push(["Familia de acogida", "Alf", "Malcolm el de en medio"]);
opciones.push(["Lizzie McGuire", "yo nunca", "Hannah Montana"]);
opciones.push(["Hawkeye", "The Punisher", "What If...?"]);
opciones.push(["Girl Meets World", "El recreo", "Glee"]);
opciones.push(["Atrapada en el medio", "Bizaardvark", "High School Musical: El musical: La serie"]);
opciones.push(["O11CE", "Violetta", "Bia"]);
opciones.push(["Genius", "A Small Light", "Holocausto"]);
opciones.push(["Yo no lo hice", "Agente K.C.", "Bunk'd"]);
opciones.push(["Aprendiendo a vivir", "Tres por tres", "Los años maravillosos"]);
opciones.push(["Grey's Anatomy", "Doogie Kamealoha, M.D.", "The Good Doctor"]);
opciones.push(["Agatha: Coven of Chaos", "Falcon y el Soldado del Invierno", "WandaVision"]);


//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarSerie();

}

//funcion que carga la siguiente serie y sus opciones
function cargarSerie(){
    //controlo si se acabaron las series
    if(Series.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgserie").src = "img/" + Series[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";

}
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente serie y sus opciones
    setTimeout(cargarSerie,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("Correctas").innerHTML = cantidadAcertadas;
    document.getElementById("Incorrectas").innerHTML = Series.length - cantidadAcertadas;


}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}