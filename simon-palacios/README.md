# 🏰 Desafío Práctico: El Escape de la Mansión Matemática


**Objetivo:** Desarrollar un script en JavaScript que simule la lógica de escape de un laberinto, utilizando variables, objetos, arreglos y la librería `Math`.

---

## 📖 Historia

Eres un **Cazador de Tesoros** atrapado en la mansión embrujada del *Conde Algoritmo*. Para salir con vida y con el tesoro, debes superar 4 habitaciones. Cada habitación tiene una trampa que solo se desactiva con cálculos precisos.

¡Tu consola es tu única herramienta de supervivencia!

---

## ⏱️ Fase 1: Preparación del Equipo

**Objetivo:** Configurar el estado inicial del juego usando Objetos y Constantes.

1. Crea un **Objeto** llamado `jugador` con las siguientes propiedades:
* `nombre`: (Tu nombre).
* `cordura`: 100 (Este será tu porcentaje de vida).
* `tesoro`: 0 (Valor acumulado).
* `velocidad`: 0.


2. Crea un **Arreglo** vacío llamado `mochila` para guardar objetos encontrados.
3. Define una **Constante** global llamada `GRAVEDAD_MANSION` y asígnale el valor de `9.8`.

---

## 🕯️ Fase 2: El Sótano Oscuro (Geometría y Potencias)

**Reto:** Estás en una habitación rectangular y oscuras. Debes correr en diagonal hacia la salida.
**Métodos a usar:** `Math.pow`, `Math.sqrt`, `Math.hypot`.

1. Define dos variables: `anchoCuarto = 10` y `largoCuarto = 20`.
2. **Cálculo Clásico:** Calcula la distancia de la diagonal usando la fórmula de Pitágoras manual () utilizando `Math.pow` para los cuadrados y `Math.sqrt` para la raíz final.
3. **Cálculo Moderno:** Vuelve a calcular la misma distancia usando **solamente** `Math.hypot` para verificar que da lo mismo.
4. Guarda el resultado en una variable `distanciaRecorrida` y réstalo (simbólicamente) de la `cordura` del jugador dividiéndolo por 10 (cansa correr).

---

## 👻 Fase 3: La Ruleta de los Fantasmas (Azar y Límites)

**Reto:** Un fantasma aparece. Debes decidir si atacas o huyes basándote en la suerte, pero tu cordura no puede subir de 100 ni bajar de 0.
**Métodos a usar:** `Math.random`, `Math.min`, `Math.max`, `Math.floor`.

1. Genera un **número aleatorio** entre 0 y 100 para el daño del fantasma. (Pista: Usa `Math.random` y multiplicadores).
2. Usa `Math.floor` para que el daño sea un número entero (sin decimales).
3. Resta ese daño a la `cordura` de tu jugador.
4. **Regla de Oro:** La cordura nunca puede ser menor a 0. Usa `Math.max` para comparar tu cordura actual y 0, quedándote con el mayor (así evitas negativos).
5. encuentras una poción que da 50 de vida. Súmala, pero usa `Math.min` para asegurar que tu salud nunca pase de 100.

---

## 🕰️ Fase 4: El Péndulo de la Muerte (Trigonometría)

**Reto:** Para abrir la puerta final, debes sincronizarte con un péndulo gigante.
**Métodos a usar:** `Math.sin`, `Math.cos`, `Math.PI`.

1. Simula el movimiento del péndulo. Crea una variable `tiempo = 3` (segundos).
2. Calcula la posición `X` del péndulo usando `Math.sin` multiplicado por una amplitud de 50. (Fórmula: ).
3. Calcula la posición `Y` usando `Math.cos`.
4. Si el valor absoluto (`Math.abs`) de la posición `X` es menor a 10, ¡logras pasar! Imprime un mensaje en consola indicando si pasaste o si te golpeó el péndulo.

---

## 🏆 Fase 5: El Puntaje Final (Redondeo y Formato)

**Reto:** Has escapado. Calcula tu puntaje final y muéstralo limpio.
**Métodos a usar:** `Math.round`, `Math.ceil`, `Math.trunc`.

1. Tu `puntajeFinal` es: `(cordura * constante_PI) + tesoro`.
2. Muestra en consola tres versiones del puntaje para el "High Score":
* **Versión Juez:** Redondeo estricto (`Math.round`).
* **Versión Optimista:** Redondeo hacia arriba (`Math.ceil`).
* **Versión "Solo Enteros":** Elimina los decimales sin redondear (`Math.trunc`).


3. Imprime el objeto `jugador` final para ver sus estadísticas.

---

## 📝 Entregable

Al finalizar debes tener un archivo `.js` que, al ejecutarse, narre en la consola la historia de tu escape paso a paso con los valores numéricos calculados.

**Ejemplo de salida esperada:**

> "Iniciando escape... Jugador: Jose"
> "Corriendo por el sótano... Distancia recorrida: 22.36 metros"
> "¡Fantasma ataca! Daño recibido: 15. Cordura actual: 85"
> "Esquivando péndulo... Posición X: 7.05. ¡Pasaste a salvo!"
> "Puntaje Final: 267"

¡Buena suerte, explorador! 🗝️