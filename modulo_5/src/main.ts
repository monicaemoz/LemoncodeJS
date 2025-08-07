// Inicializa la puntuación
let puntuacion: number = 0;

// Función para actualizar la puntuación
function muestraPuntuacion() {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerText = `Puntuación: ${puntuacion}`;
  }
}

//Interfaz cartas
interface Cartas {
  valor: number;
  texto: string;
  img: string;
}

// Cartas y sus valores
const cartas: Cartas[] = [
  { valor: 1, texto: "1", img: "src/resources/1_as-copas.jpg" },
  { valor: 2, texto: "2", img: "src/resources/2_dos-copas.jpg" },
  { valor: 3, texto: "3", img: "src/resources/3_tres-copas.jpg" },
  { valor: 4, texto: "4", img: "src/resources/4_cuatro-copas.jpg" },
  { valor: 5, texto: "5", img: "src/resources/5_cinco-copas.jpg" },
  { valor: 6, texto: "6", img: "src/resources/6_seis-copas.jpg" },
  { valor: 7, texto: "7", img: "src/resources/7_siete-copas.jpg" },
  { valor: 0.5, texto: "10", img: "src/resources/10_sota-copas.jpg" },
  { valor: 0.5, texto: "11", img: "src/resources/11_caballo-copas.jpg" },
  { valor: 0.5, texto: "12", img: "src/resources/12_rey-copas.jpg" },
];

// Función para obtener una carta aleatoria
function dameCarta(): Cartas {
  const carta = cartas[Math.floor(Math.random() * cartas.length)];
  return carta;
}

// Función para mostrar la carta
function mostrarCarta(carta: Cartas) {
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = carta.texto;
  }

  const cartaImg = document.getElementById("cartaImg");
  if (cartaImg instanceof HTMLImageElement) {
    cartaImg.src = carta.img;
  }
}

// Función para sumar la puntuación (Incluir en cada vez q se pida una carta)
function sumarPuntuacion(carta: Cartas) {
  puntuacion += carta.valor;
  muestraPuntuacion();
}

// Función para manejar el evento de pedir carta
function pedirCarta() {
  const carta = dameCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  verificarGameOver();
}

//Evento para el botón de pedir carta
const botonPedirCarta = document.getElementById("pedirCartaBtn");
botonPedirCarta?.addEventListener("click", pedirCarta);

// Función para verificar si se termina el juego
function verificarGameOver() {
  if (puntuacion > 7.5) {
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
      elementoMensaje.innerText = "Has perdido, te has pasado de 7.5 puntos.";
    }
    bloquearJuego();
  } else if (puntuacion == 7.5) {
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
      elementoMensaje.innerText = "¡Lo has clavado!¡Enhorabuena!";
    }
    bloquearJuego();
  }
}

// Función para bloquear los botones cuando el juego termina
function bloquearJuego() {
  const elementoPedirCarta = document.getElementById("pedirCartaBtn");
  if (elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  }
  const elementoPlantarse = document.getElementById("plantarseBtn");
  if (elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;
  }
}

// Función para manejar el evento de plantarse
function plantarse() {
  let mensaje: string = "";
  if (puntuacion < 4) {
    mensaje = `Te has quedado lejos con ${puntuacion} puntos.`;
  } else if (puntuacion === 5) {
    mensaje = `Tenías miedo, te quedaste en ${puntuacion} puntos.`;
  } else if (puntuacion >= 6 && puntuacion < 7.5) {
    mensaje = `Casi lo logras, conseguiste ${puntuacion} puntos.`;
  } else if (puntuacion === 7.5) {
    mensaje = `¡Has ganado! Llegaste a ${puntuacion} puntos.`;
  }

  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje && mensaje !== undefined) {
    elementoMensaje.innerText = mensaje;
  }
  bloquearJuego(); //NUEVO CAMBIO COMRPOBAR
}

// Evento para el botón de plantarse
const botonPlantarse = document.getElementById("plantarseBtn");
botonPlantarse?.addEventListener("click", plantarse);

// Función para reiniciar el juego
function reiniciarJuego() {
  puntuacion = 0;
  muestraPuntuacion();
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = "Boca abajo";
  }
  const elementoImgCarta = document.getElementById("cartaImg");
  if (elementoImgCarta instanceof HTMLImageElement) {
    elementoImgCarta.src = "src/resources/back.jpg";
  }
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerText = "vamos a jugar!";
  }
  const elementoPedirCarta = document.getElementById("pedirCartaBtn");
  if (elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = false;
  }
  const elementoPlantarse = document.getElementById("plantarseBtn");
  if (elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = false;
  }
}

// Evento para el botón de reinicio
const botonReinicio = document.getElementById("reiniciarBtn");
botonReinicio?.addEventListener("click", reiniciarJuego);
