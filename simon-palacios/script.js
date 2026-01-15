// ============================
// FASE 1: PREPARACIÓN DEL EQUIPO
// ============================

const GRAVEDAD_MANSION = 9.8;
const PI_CONSTANTE = Math.PI;

const jugador = {
    nombre: "Simon",
    cordura: 100,
    tesoro: 0,
    velocidad: 0
};

const mochila = [];

// ============================
// FASE 2: EL SÓTANO OSCURO
// ============================

function fase2SotanoOscuro() {
    console.log("\nFASE 2: El Sótano Oscuro (Geometría y Potencias)");
    console.log("==================================================");
    
    const anchoCuarto = 10;
    const largoCuarto = 20;
    
    const cuadradoAncho = Math.pow(anchoCuarto, 2);
    const cuadradoLargo = Math.pow(largoCuarto, 2);
    const suma = cuadradoAncho + cuadradoLargo;
    const distanciaClasica = Math.sqrt(suma);
    
    console.log(`Calculo Clasico (Pitagoras):`);
    console.log(`  ${anchoCuarto}² = ${cuadradoAncho}`);
    console.log(`  ${largoCuarto}² = ${cuadradoLargo}`);
    console.log(`  √(${cuadradoAncho} + ${cuadradoLargo}) = ${distanciaClasica.toFixed(2)} metros`);
    
    const distanciaModerna = Math.hypot(anchoCuarto, largoCuarto);
    console.log(`Calculo Moderno (Math.hypot): ${distanciaModerna.toFixed(2)} metros`);
    
    const distanciaRecorrida = distanciaModerna;
    jugador.cordura -= distanciaRecorrida / 10;
    jugador.velocidad = distanciaRecorrida;
    
    console.log(`Cordura actual: ${jugador.cordura.toFixed(2)}%`);
}

// ============================
// FASE 3: LA RULETA DE LOS FANTASMAS
// ============================

function fase3RuletaFantasmas() {
    console.log("\nFASE 3: La Ruleta de los Fantasmas (Azar y Límites)");
    console.log("==================================================");
    
    const danoFantasma = Math.floor(Math.random() * 100);
    
    console.log(`Daño del fantasma: ${danoFantasma}`);
    
    jugador.cordura -= danoFantasma;
    jugador.cordura = Math.max(jugador.cordura, 0);
    
    console.log(`Cordura despues del ataque: ${jugador.cordura.toFixed(2)}%`);
    
    mochila.push("Poción Restauradora");
    jugador.cordura += 50;
    jugador.cordura = Math.min(jugador.cordura, 100);
    
    console.log(`Cordura despues de la pocion: ${jugador.cordura.toFixed(2)}%`);
}

function iniciarEscape() {
    console.log("==================================================");
    console.log("EL ESCAPE DE LA MANSIÓN MATEMÁTICA");
    console.log("==================================================");
    
    console.log(`Jugador: ${jugador.nombre}`);
    console.log(`Cordura inicial: ${jugador.cordura}%`);
    
    fase2SotanoOscuro();
    fase3RuletaFantasmas();
}

iniciarEscape();

