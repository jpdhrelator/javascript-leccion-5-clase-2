// Mansion Matematica del Conde Algoritmo



// Configuracion inicial

const jugador = {
    nombre: "Jeremy el Super Clerigo",
    cordura: 100, // En porcentaje, Equivale a la vida del jugador
    tesoro: 0,
    velocidad: 0
};

let mochila = [];

const GRAVEDAD_MANSION = 9.8;

// El sotano oscuro, correr en diagonal hacia la salida

const anchoCuarto = 10;
const largoCuarto = 20;

// Calculo clasico de la diagonal
const sumaLados = Math.pow(anchoCuarto, 2) + Math.pow(largoCuarto, 2);

const distDiagonal = Math.sqrt(sumaLados);

// Calculo moderno de la diagonal

const distDiagonalModerno = Math.hypot(anchoCuarto, largoCuarto);

const distanciaRecorrida = distDiagonalModerno;

// restamos cordura al recorrer distancia
jugador.cordura -= (distanciaRecorrida / 10);

// ruleta de los fantasmas

// definimos el daño de los fantasmas de forma aleatoria
const danioFantasma = Math.random() * 100;

// redondeamos el valor del daño a nunmeros enteros
const danioEntero = Math.floor(danioFantasma);

// restamos cordura al recibir daño del fantasma
jugador.cordura -= danioEntero;

// nos aseguramos que nuestra vida nunca sea menor a 0

jugador.cordura = Math.max(0, jugador.cordura);

// al encontrar una pocion, nos restaura 50 puntos de vida
const pocionCurativa = 50;

jugador.cordura += pocionCurativa;

// nos aseguramos que la vida no supere el maximo (100)
jugador.cordura = Math.min(100, jugador.cordura);







