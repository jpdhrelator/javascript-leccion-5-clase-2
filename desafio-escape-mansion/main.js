

/* Fase 1: Preparación del Equipo */

// Objeto jugador con su detalle

let jugador = {
    nombre: "Evans",
    cordura: 100,
    tesoro:0,
    velocidad:0
};

//Arreglo mochila para guardar objetos encontrados

let mochila = []; // parte vacía

const GRAVEDAD_MANSION = 9.8;

/* Fase 2: El Sótano Oscuro (Geometría y Potencias) */

let anchoCuarto = 10;
let largoCuarto = 20;

let calcularDistanciaDiagonal = () => {

     return Math.sqrt(Math.pow(anchoCuarto,2) + Math.pow(largoCuarto,2))
};

/* //prueba de la funcion

console.log(calcularDistanciaDiagonal()); */

let calcularDistanciaDiagonalDos = () =>{
    return Math.hypot(anchoCuarto,largoCuarto);

};

/* //prueba de la funcion
console.log(calcularDistanciaDiagonalDos());
 */

let distanciaRecorrida = calcularDistanciaDiagonal();

/*  Fase 3: La Ruleta de los Fantasmas (Azar y Límites) */


function quitarCorduraAlJugador() {

    // Daño aleatorio entre 0 y 100
    let danoDelFantasma = Math.floor(Math.random() * 101);

    // Se resta el daño
    jugador.cordura -= danoDelFantasma;

    //  Se limita para que nunca baje de 0
    jugador.cordura = Math.max(jugador.cordura, 0);

    return danoDelFantasma;
};


let restauraVidaConPocion = () =>{
    // Asignamos los 50 de salud
    let hpPocion = 50;

    //Los sumamos a la cordura
    jugador.cordura += hpPocion;

    //Si la cordura  es mayor a 100 entonces se elige la menor y se asigna
    jugador.cordura = Math.min(jugador.cordura, 100);


};


/* Fase 4: El Péndulo de la Muerte (Trigonometría) */

const TIEMPO = 3;
const AMPLITUD = 50;

let calcularPosicionX = () =>{
    return Math.sin(TIEMPO * Math.PI) *AMPLITUD;
};

let calcularPosiciony = () =>{
    return Math.cos(TIEMPO * Math.PI) *AMPLITUD;
};

let sobrevivesAlPendulo = (x) => {

    // Math.abs ignora izquierda o derecha, solo mira qué tan lejos estás del centro
    if (Math.abs(x) < 10) {
        console.log("¡Pasaste ");
        return true;   // sobreviviste
    } else {
        console.log("¡CRASH! El péndulo te manda a volar");
        return false;  // fuiste aplastado
    }
};


/* Fase 5: El Puntaje Final (Redondeo y Formato) */