// EL ESCAPE DE LA MANSION MATEMATICA

console.log("\n Iniciando el escape...");

// FASE 1: PREPARACION DEL EQUIPO
const jugador = {
  nombre: "Loreto Trigo",
  cordura: 100, //% de vida
  tesoro: 10, //valor acumulado
  velocidad: 0
};

const mochila = [];
const GRAVEDAD_MANSION = 9.8;

console.log("Jugador:", jugador.nombre);
console.log("Cordura inicial:", jugador.cordura);

// FASE 2: EL SOTANO OSCURO
console.log("\n Entrando al sótano oscuro...");

let anchoCuarto = 10;
let largoCuarto = 20;

/* Calculo clasico (Pitagoras). La raiz del ancho al cuadrado + el largo al cuadrado.
let diagonalClasica = Math.sqrt(
  Math.pow(anchoCuarto, 2) + Math.pow(largoCuarto, 2)
); */ 

// Calculo moderno. Usando la hipotenusa.
let diagonalModerna = Math.hypot(anchoCuarto, largoCuarto);

let distanciaRecorrida = diagonalModerna;

// Cansancio
jugador.cordura -= distanciaRecorrida / 10;

console.log(
  "Corriendo en diagonal:",
  distanciaRecorrida.toFixed(2),
  "metros"
);
console.log("Cordura tras correr:", jugador.cordura.toFixed(2));

// FASE 3: LA RULETA DE LOS FANTASMAS
console.log("\n ¡Fantasma aparece!");

let dañoFantasma = Math.floor(Math.random() * 101);
console.log("Daño del fantasma:", dañoFantasma);

jugador.cordura -= dañoFantasma;

//  La cordura nunca puede ser menor a 0. Usa Math.max para comparar tu cordura actual y 0, quedándote con el mayor (así evitas negativos).
jugador.cordura = Math.max(jugador.cordura, 0);

console.log("Cordura tras ataque:", jugador.cordura);

// Encuentras una pocion
console.log("\n Encuentras una poción (+50)");
jugador.cordura += 50;

// Evitar pasar de 100
jugador.cordura = Math.min(jugador.cordura, 100);

console.log("Cordura tras poción:", jugador.cordura);

// FASE 4: EL PENDULO DE LA MUERTE
console.log("\n Enfrentando el péndulo...");

let tiempo = 3;
let amplitud = 50;

let posicionX = Math.sin(tiempo) * amplitud;
let posicionY = Math.cos(tiempo) * amplitud;
