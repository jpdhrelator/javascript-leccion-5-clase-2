/*

Eres el ingeniero de vuelo de la nave Euler-X. 
Tu misión es calcular si la nave sobrevive a un campo de asteroides,
cuánto combustible gasta, calcular la trayectoria de disparo y redondear 
los datos para la pantalla del piloto.

*/


console.log(`🚀 Iniciando sistemas de ${nave.nombre}...`);


calcularEnergiaMotor();

ajustarRumbo();

const datosVuelo = calcularDistanciaImpacto(nave.posX, nave.posY, objetivo.posX, objetivo.posY);

console.log(`[RADAR] Distancia real: ${datosVuelo.distancia.toFixed(4)}`);
console.log(`[SCANNER] Lado del asteroide cúbico: ${datosVuelo.ladoAsteroide.toFixed(2)}m`);

simulacionDeCombate(datosVuelo.distancia);

reportePantalla(datosVuelo);

console.log("\n📜 BITÁCORA DE MISIÓN:");
for (const info of bitacora) {
    console.log(info);
}