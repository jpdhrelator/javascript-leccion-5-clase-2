//-----Etapa 1: preparación del equipo -----------

//definición de variables

let jugador = {
    nombre: "Javiera",
    cordura: 100,
    tesoro: 5,
    velocidad: 3
}

let mochila = [];

const GRAVEDAD_MANSION = 9.8;

//------- Etapa 2: El Sótano Oscuro --------------
console.log(`INICIALIZANDO JUEGO...`);
console.log(`Jugador(a) ${jugador.nombre}, bienvenido(a) a la partida!`);
console.log("Toma buenas decisiones ya que tu cordura sera puesta a prueba...")

//definir variables
let anchoCuarto = 10;
let largoCuarto = 20;

//calcular la diagonal
function calcularDiagonal(ancho,largo){
    return Math.sqrt(Math.pow(ancho, 2)+ Math.pow(largo, 2));
}
//definimos una variable que contenga el calculode la diagonal
let diagonal = calcularDiagonal(anchoCuarto,largoCuarto);
console.log(`Distancia Recorrida: ${Math.round(diagonal)}`);

//calcular diagonal usando Math.hypot
let diagonalNuevoCalculo = Math.hypot(anchoCuarto,largoCuarto);
//console.log(`Valor de distancia Recorrida: ${Math.round(diagonalNuevoCalculo)}`); // retorna el mismo resultado 

//resultado en nueva variable
let distanciaRecorrida = diagonal;
//perdida de cordura
let perdidaCordura = distanciaRecorrida / 10;
jugador.cordura -= perdidaCordura;

console.log(`Distancia recorrida: ${Math.round(distanciaRecorrida)} | Cordura restante: ${Math.round(jugador.cordura)}`);

//--------Etapa 3: La Ruleta de los Fantasmas ------------
// determinar si se huye del encuentro o nos quedamos a atacar
console.log(`Jugador(a) ${jugador.nombre} entramos a territorio Fantasma!!! Manten la calma y confía en tu suerte..`);
function encuentroFantasma(jugador){
    console.log(`¡Nos encontramos un Fantasma!👻... Jugador(a) ${jugador.nombre} 🧙🏻‍♀️ Vamos a decidir si atacamos o huimos.`);
    let factorSuerte = Math.floor(Math.random()*101); // de 0 a 49 chaito 👋🏻, de 50 a 100 a pelear! ⚔️
    if (factorSuerte < 50){
        console.log(`Decidiste  huir 🏃🏻‍♀️ ¡Soldado que arranca sirve para otra guerra!`);
    }else{
        console.log(`Decidiste atacar ⚔️¡Vamos Guerrero(a)!`);
        //calcular daño del fantasma
        let danioFantasma = Math.floor(Math.random()*101);
        jugador.cordura = Math.max(0, jugador.cordura - danioFantasma);
    }
    return jugador.cordura;
}
encuentroFantasma(jugador);
console.log(`Cordura restante: ${Math.round(jugador.cordura)}`);

// variable para poción encontrada
let pocion = 50;
jugador.cordura = Math.min(100, jugador.cordura + pocion);

console.log(`!Poción Encontrada!🧪 Se sumará: ${pocion} puntos de vida. | Cordura Actual: ${Math.round(jugador.cordura)}`);

//--------Etapa 4: El Péndulo de la Muerte -----------
//variables para calcular movimiento pendulo
let tiempo = 3; //segundos
let amplitud = 50; // cuanto se mueve el pendulo
let longitud = 10; //longitud pendulo
let velocidadAngular = Math.sqrt(GRAVEDAD_MANSION / longitud);

function calcularPosicionPendulo(tiempo){
    return{
        x: Math.sin(tiempo * velocidadAngular)* amplitud,
        y: Math.cos(tiempo * velocidadAngular)* amplitud
    };
}
function zonaSegura(posicion,jugador){
    const margenSeguro = (jugador.velocidad + jugador.cordura) / 10;
    const seguroEnX = Math.abs(posicion.x) <= margenSeguro;
    const seguroEnY = Math.abs(posicion.y) >= -margenSeguro;
    return  seguroEnX && seguroEnY;
}
function abrirPuertaFinal(jugador,tiempo){
    const posicion = calcularPosicionPendulo(tiempo);

    if(zonaSegura(posicion,jugador)){
        console.log("¡Cruzas la puerta a tiempo!🚪");
        return true;
    }
    jugador.cordura = Math.max(0, jugador.cordura - 25);
    console.log(`¡Muy lento! El péndulo te golpeo.💀 Pierdes 25 puntos de cordura`);
}
abrirPuertaFinal(jugador,tiempo);
console.log(`Cordura final: ${Math.round(jugador.cordura)}  `);

//-----Etapa Final: Puntaje final-------------
//calcular el puntaje final del jugador
let puntajeFinal = (jugador.cordura *Math.PI) + jugador.tesoro;

//versiones para el puntaje final
console.log(`Puntaje Final Versión juez : ${Math.round(puntajeFinal)}`);
console.log(`Puntaje Final Versión optimista: ${Math.ceil(puntajeFinal)}`);
console.log(`Puntaje Final Versión Solo enteros: ${Math.trunc(puntajeFinal)}`);

console.log(jugador);











