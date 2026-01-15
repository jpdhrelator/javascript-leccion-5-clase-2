// ==========================================
// 1. CONFIGURACIÓN Y OBJETOS (Variables y Objetos)
// ==========================================
const SISTEMA={
    gravedad: 9.8,
    constanteAtmosferica: Math.LN10,
    factorDecaimiento: Math.LN2
};


let nave= {
    nombre: "Euler-X",
    energia: 100, // % porcentaje,
    escudo: 5000, // HP
    posX: 0,
    posY: 0,
    velocidad: 0,
    rumbo: 0 // radianes
};

let objetivo={
    id: "Asteroide-Z",
    posX: 80,
    posY: 60,
    masa: 1000 //kg
}

// Historial de la caja negra
let bitacora=[];