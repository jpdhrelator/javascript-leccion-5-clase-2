// Escape de la Mansión Matemática
// Autora: Paulina Pizarro


// Configuración inicial

const CONFIG = {
  GRAVEDAD_MANSION: 9.8,
  amplitudPendulo: 50,
  tiempoPendulo: 3,
};
// Fase 1: Preparación del equipo

let jugador = {
  nombre: "Pauly",
  cordura: 100,
  tesoro: 0,
  velocidad: 0,
  mochila: [],
};

console.log(`Iniciando escape... Jugador: ${jugador.nombre}`);
console.log(`Cordura inicial: ${jugador.cordura}, Tesoro: ${jugador.tesoro}`);
console.log("-----FIN FASE 1------");


// Fase 2: El Sótano Oscuro

let anchoCuarto = 10;
let largoCuarto = 20;

let diagonalClasica = Math.sqrt(Math.pow(anchoCuarto, 2) + Math.pow(largoCuarto, 2)); // Cálculo clásico

let diagonalHypot = Math.hypot(anchoCuarto, largoCuarto); // Cálculo moderno

// Distancia recorrida
let distanciaRecorrida = diagonalHypot;
jugador.cordura -= distanciaRecorrida / 10;

console.log(`Corriendo por el sótano... Distancia clásica: ${diagonalClasica.toFixed(2)} m`);
console.log(`Verificación con Math.hypot: ${diagonalHypot.toFixed(2)} m`);
console.log(`Cordura tras correr: ${jugador.cordura.toFixed(2)}`); // se reduce la stamina
console.log("-----FIN FASE 2------");


// Fase 3: La Ruleta de los Fantasmas

let danoFantasma = Math.floor(Math.random() * 101);
jugador.cordura = Math.max(0, jugador.cordura - danoFantasma);

console.log(`¡Ataque de fantasma! Daño recibido: ${danoFantasma}. Cordura: ${jugador.cordura.toFixed(2)}`); // se reducen puntos de cordura


let pocion = 50;
jugador.cordura = Math.min(100, jugador.cordura + pocion); // Poción encontrada
jugador.mochila.push("Poción de cordura +50"); //se suman 50 pts de cordura

console.log(`Encuentras una poción (+${pocion}). Cordura actual: ${jugador.cordura}`);
console.log(`Mochila: [${jugador.mochila.join(", ")}]`);
console.log("-----FIN FASE 3------");


// Fase 4: El Péndulo de la Muerte

let tiempo = CONFIG.tiempoPendulo;
let posX = CONFIG.amplitudPendulo * Math.sin(tiempo);
let posY = CONFIG.amplitudPendulo * Math.cos(tiempo);

console.log(`Esquivando péndulo... X: ${posX.toFixed(2)}, Y: ${posY.toFixed(2)}`);

if (Math.abs(posX) < 10) {
  console.log("¡Lograste evadir el péndulo!");
  jugador.tesoro += 100;
  jugador.mochila.push("Llave dorada del Conde"); //en caso de éxito
} else {
  console.log("¡El péndulo te golpea! Pierdes 10 pts de cordura.");
  jugador.cordura = Math.max(0, jugador.cordura - 10); //en caso de fallar
}

console.log(`Cordura: ${jugador.cordura}, Tesoro: ${jugador.tesoro}`);
console.log("-----FIN FASE 4------");


// Fase 5: Puntaje Final

console.log("Lograste escapar de la mansión. Calculando puntaje final...");

let puntajeFinal = (jugador.cordura * Math.PI) + jugador.tesoro;

console.log(`Puntaje base: ${puntajeFinal.toFixed(2)}`);
console.log(`Versión Juez (round): ${Math.round(puntajeFinal)}`);
console.log(`Versión Optimista (ceil): ${Math.ceil(puntajeFinal)}`);
console.log(`Versión Solo Enteros (trunc): ${Math.trunc(puntajeFinal)}`);
console.log("-----FIN FASE 5------");

// Resultados Finales
console.log("Estado final del jugador:");
console.log(jugador);