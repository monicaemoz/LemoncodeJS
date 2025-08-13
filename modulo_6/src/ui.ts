import { partida } from "./modelo";
import {
  sumarPuntuacion,
  obtenerNumeroAleatorio,
  dameCarta,
  obtenerMensajeCuandoMePlanto,
} from "./motor";
import { actualizarPuntuación } from "./modelo";

// Función para actualizar la puntuación
export function muestraPuntuacion() {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerText = `Puntuación: ${partida.puntuacion}`;
  }
}

// Función para mostrar la carta
export function mostrarCarta(texto: string, img: string) {
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = texto;
  }

  const cartaImg = document.getElementById("cartaImg");
  if (cartaImg instanceof HTMLImageElement) {
    cartaImg.src = img;
  }
}

// Función para manejar el evento de pedir carta
export function pedirCarta() {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = dameCarta(numeroAleatorio);
  mostrarCarta(carta.texto, carta.img);
  const nuevosPuntos = sumarPuntuacion(carta);
  actualizarPuntuación(nuevosPuntos);
  muestraPuntuacion();
  verificarPartida();
}

//Mostrar mensaje*
export const mostrarMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerText = mensaje;
  }
};

// Función para verificar si se termina el juego
function verificarPartida() {
  if (partida.puntuacion > 7.5) {
    mostrarMensaje("Has perdido, te has pasado de 7.5 puntos.");
    bloquearJuego(true);
  } else if (partida.puntuacion == 7.5) {
    mostrarMensaje("¡Lo has clavado!¡Enhorabuena!");
    bloquearJuego(true);
  }
}

// Función para bloquear los botones cuando el juego termina
function bloquearJuego(estaDeshabilitado: boolean) {
  const elementoPedirCarta = document.getElementById("pedirCartaBtn");
  if (elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = estaDeshabilitado;
  }
  const elementoPlantarse = document.getElementById("plantarseBtn");
  if (elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = estaDeshabilitado;
  }
}

// Función para manejar el evento de plantarse*
export function plantarse() {
  const mensaje: string = obtenerMensajeCuandoMePlanto();
  mostrarMensaje(mensaje);
  bloquearJuego(true);
}

// Función para reiniciar el juego
export function reiniciarJuego() {
  actualizarPuntuación(0);
  muestraPuntuacion();
  mostrarCarta("Boca abajo", "src/resources/back.jpg");
  mostrarMensaje("vamos a jugar!");
  bloquearJuego(false);
}

export function cargarJuego() {
  //Evento para el botón de pedir carta
  const botonPedirCarta = document.getElementById("pedirCartaBtn");

  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", pedirCarta);
  }

  // Evento para el botón de plantarse
  const botonPlantarse = document.getElementById("plantarseBtn");

  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
  }

  // Evento para el botón de reinicio
  const botonReinicio = document.getElementById("reiniciarBtn");

  if (botonReinicio && botonReinicio instanceof HTMLButtonElement) {
    botonReinicio.addEventListener("click", reiniciarJuego);
  }

  reiniciarJuego();
}
