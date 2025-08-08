import { partida, Cartas } from "./modelo";

// Función para actualizar la puntuación
export function muestraPuntuacion() {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerText = `Puntuación: ${partida.puntuacion}`;
  }
}

// Función para mostrar la carta
export function mostrarCarta(carta: Cartas) {
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = carta.texto;
  }

  const cartaImg = document.getElementById("cartaImg");
  if (cartaImg && cartaImg instanceof HTMLImageElement) {
    cartaImg.src = carta.img;
  }
}

//!!! Función para verificar si se termina el juego
export function verificarGameOver() {
  if (partida.puntuacion > 7.5) {
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
      elementoMensaje.innerText = "Has perdido, te has pasado de 7.5 puntos.";
    }
    bloquearJuego();
  } else if (partida.puntuacion == 7.5) {
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
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  }
  const elementoPlantarse = document.getElementById("plantarseBtn");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;
  }
}

// Función para manejar el evento de plantarse
export function plantarse() {
  let mensaje: string = "";
  if (partida.puntuacion < 4) {
    mensaje = `Te has quedado lejos con ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion >= 4 && partida.puntuacion <= 6) {
    mensaje = `Tenías miedo, te quedaste en ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion >= 6 && partida.puntuacion < 7.5) {
    mensaje = `Casi lo logras, conseguiste ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion === 7.5) {
    mensaje = `¡Has ganado! Llegaste a ${partida.puntuacion} puntos.`;
  }

  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje && mensaje !== undefined) {
    elementoMensaje.innerText = mensaje;
  }
  bloquearJuego();
}

//!!! Función para reiniciar el juego
export function reiniciarJuego() {
  partida.puntuacion = 0;
  muestraPuntuacion();
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = "Boca abajo";
  }
  const elementoImgCarta = document.getElementById("cartaImg");
  if (elementoImgCarta && elementoImgCarta instanceof HTMLImageElement) {
    elementoImgCarta.src = "src/resources/back.jpg";
  }
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerText = "vamos a jugar!";
  }
  const elementoPedirCarta = document.getElementById("pedirCartaBtn");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = false;
  }
  const elementoPlantarse = document.getElementById("plantarseBtn");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = false;
  }
}
