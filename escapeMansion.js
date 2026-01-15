// ===============================
// 🏰 EL ESCAPE DE LA MANSIÓN MATEMÁTICA
// ===============================

console.log("🏰 Iniciando escape de la Mansión Matemática...");

// ===============================
// ⏱️ FASE 1: Preparación del Equipo
// ===============================

const GRAVEDAD_MANSION = 9.8;

const jugador = {
  nombre: "Explorador",
  cordura: 100,
  tesoro: 0,
  velocidad: 0
};

const mochila = [];

console.log(`🧭 Jugador preparado: ${jugador.nombre}`);
console.log("Estado inicial:", jugador);

// ===============================
// 🕯️ FASE 2: El Sótano Oscuro
// ===============================

console.log("\n🕯️ Entrando al sótano oscuro...");

let anchoCuarto = 10;
let largoCuarto = 20;

// Cálculo clásico (Pitágoras)
let distanciaClasica = Math.sqrt(
  Math.pow(anchoCuarto, 2) + Math.pow(largoCuarto, 2)
);

// Cálculo moderno
let distanciaModerna = Math.hypot(anchoCuarto, largoCuarto);

let distanciaRecorrida = distanciaClasica;

jugador.cordura -= distanciaRecorrida / 10;

console.log(`🏃 Corriendo en diagonal...`);
console.log(`📐 Distancia (Pitágoras): ${distanciaClasica.toFixed(2)} metros`);
console.log(`📐 Distancia (hypot): ${distanciaModerna.toFixed(2)} metros`);
console.log(`🧠 Cordura tras correr: ${jugador.cordura.toFixed(2)}`);

// ===============================
// 👻 FASE 3: La Ruleta de los Fantasmas
// ===============================

console.log("\n👻 ¡Un fantasma aparece!");

let danoFantasma = Math.floor(Math.random() * 101);

jugador.cordura -= danoFantasma;
jugador.cordura = Math.max(jugador.cordura, 0);

console.log(`💥 Daño recibido: ${danoFantasma}`);
console.log(`🧠 Cordura tras ataque: ${jugador.cordura}`);

// Poción de vida
console.log("🧪 Encuentras una poción de cordura (+50)");

jugador.cordura += 50;
jugador.cordura = Math.min(jugador.cordura, 100);

console.log(`🧠 Cordura actual: ${jugador.cordura}`);

// ===============================
// 🕰️ FASE 4: El Péndulo de la Muerte
// ===============================

console.log("\n🕰️ Enfrentando el péndulo gigante...");

let tiempo = 3;
let amplitud = 50;

let posicionX = Math.sin(tiempo) * amplitud;
let posicionY = Math.cos(tiempo) * amplitud;

console.log(`📍 Posición X: ${posicionX.toFixed(2)}`);
console.log(`📍 Posición Y: ${posicionY.toFixed(2)}`);

if (Math.abs(posicionX) < 10) {
  console.log("✅ ¡Perfecto! Pasas el péndulo sin ser golpeado.");
} else {
  console.log("💀 ¡El péndulo te golpea! Sobrevives de milagro...");
  jugador.cordura = Math.max(jugador.cordura - 20, 0);
}

// ===============================
// 🏆 FASE 5: Puntaje Final
// ===============================

console.log("\n🏆 Calculando puntaje final...");

let puntajeFinal = (jugador.cordura * Math.PI) + jugador.tesoro;

console.log(`📊 Puntaje real: ${puntajeFinal.toFixed(2)}`);
console.log(`⚖️ Versión Juez (round): ${Math.round(puntajeFinal)}`);
console.log(`🌟 Versión Optimista (ceil): ${Math.ceil(puntajeFinal)}`);
console.log(`🔢 Versión Solo Enteros (trunc): ${Math.trunc(puntajeFinal)}`);

// ===============================
// 📜 ESTADO FINAL
// ===============================

console.log("\n📜 Estado final del jugador:");
console.log(jugador);

console.log("\n🎉 ¡Has escapado con vida de la Mansión Matemática!");
