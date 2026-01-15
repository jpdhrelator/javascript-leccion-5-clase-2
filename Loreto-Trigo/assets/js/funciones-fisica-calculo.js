// ==========================================
// 2. FUNCIONES DE FÍSICA Y CÁLCULO
// ==========================================


function calcularEnergiaMotor() {
    
    const potenciaBase = Math.PI * Math.pow(Math.E,2);
    nave.velocidad = potenciaBase * 10;

    const msj=`[MOTOR] Potencia iniciada. Velocidad teórica: ${nave.velocidad.toFixed(2)} km/h`;

    bitacora.push(msj);
    
}

function calcularDistanciaImpacto(x1,y1,x2,y2) {
    
    const distancia= Math.hypot(x2-x1,y2-y1);

    const ladoAsteroide= Math.cbrt(objetivo.masa);

    const fuerzaImpacto= Math.sqrt(objetivo.masa) * Math.pow(nave.velocidad, 2);

   

    return { distancia, ladoAsteroide, fuerzaImpacto };

    /*
    return {
        distancia: distancia,
        ladoAsteroide: ladoAsteroide,
        fuerzaImpacto: fuerzaImpacto
    }
    */
}

function ajustarRumbo() {
    const deltaX= objetivo.posX - nave.posX;
    const deltaY= objetivo.posY - nave.posY;

    const anguloNecesario= Math.atan(deltaY/deltaX);

    nave.rumbo = anguloNecesario;

    const vectorX = Math.cos(anguloNecesario);
    const vectorY = Math.sin(anguloNecesario);

    bitacora.push(`[NAVEGACIÓN] Rumbo ajustado a: ${anguloNecesario.toFixed(4)} rads.`);
    bitacora.push(`[VECTORES] Impulso X: ${vectorX.toFixed(2)}, Y: ${vectorY.toFixed(2)}`);
}

function simulacionDeCombate(distancia) {
    bitacora.push("--- INICIANDO SIMULACIÓN DE COMBATE ---");

    const factorSuerte= Math.random();

    // daños base
    let danoBase= Math.max(10, Math.min(50, factorSuerte * 100));
    
    const energiaPrevia= nave.energia;

    nave.energia -= danoBase;

    const estadoVida= Math.sign(nave.energia);

    const perdida = Math.abs(nave.energia - energiaPrevia);

    nave.escudo -= perdida;

    if(estadoVida == 1){
        bitacora.push(`Sobrevivimos. Daño recibido: ${danoBase.toFixed(2)}% hemos perdido  ${nave.escudo} de escudo`);
    } else {
        bitacora.push("ALERTA CRÍTICA: Energía agotada.");
    }
}

function reportePantalla(datos) {
    console.log("\n📊 --- REPORTE DE HUD (PANTALLA) ---");
 
    console.log(`COORD X: ${Math.floor(objetivo.posX)}`);

    console.log(`COMBUSTIBLE : ${Math.ceil(nave.velocidad/5)} unidades`);
    
    console.log(`DISTANCIA VISUAL : ${Math.round(datos.distancia)}`);

    console.log(`FUERZA NETA : ${Math.trunc(datos.fuerzaImpacto)} Newtons`);

    console.log(`ESTADO ESCUDO : ${nave.escudo} HP`);   
    
    
}

