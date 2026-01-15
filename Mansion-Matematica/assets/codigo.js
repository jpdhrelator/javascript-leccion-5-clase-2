console.log("Iniciando el Escape de la Mansión Matematica");

/*----- Fase 1: "Preparacion del Equipo"------*/

const GRAVEDAD_MANSION=9.8;

const jugador={
    nombre: "Dayne",
    cordura: 100,
    tesoro: 0,
    velocidad: 0
};

const mochila=[];

console.log(`Jugador ${jugador.nombre}`);
console.log(`Cordura Inicial: ${jugador.cordura}`);
console.log("Mochila lista para el Escape");

/*----- Fase 2: "El Sotano Oscuro (Geometria y Potencias)"------*/

//Medidas del cuarto 
let anchoCuarto=10;
let largoCuarto=20;

//Calculo clasico
let diagonalCuartoClasico = Math.sqrt(Math.pow(anchoCuarto,2) + Math.pow(largoCuarto,2));

//Calculo Moderno
let diagonalCuartoModerno = Math.hypot(anchoCuarto,largoCuarto);

//Distancia recorrida
let distanciaRecorrida=diagonalCuartoClasico;

jugador.cordura -= distanciaRecorrida / 10;

console.log(`Distancia recorrida en diagonal: ${distanciaRecorrida.toFixed(2)} metros`);
console.log(`La cordura del jugador ${jugador.nombre} es de ${jugador.cordura.toFixed(2)} despues de correr`);

/*----- Fase 3: "La Ruleta de los Fantasmas (Azar y Limites)"------*/





