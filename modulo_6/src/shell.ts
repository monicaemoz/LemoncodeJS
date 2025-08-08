import { dameCarta, sumarPuntuacion } from "./motor";
import {
  mostrarCarta,
  muestraPuntuacion,
  verificarGameOver,
  plantarse,
  reiniciarJuego,
} from "./ui";

document.addEventListener("DOMContentLoaded", reiniciarJuego); //Dudas

function pedirCarta() {
  const carta = dameCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion();
  verificarGameOver();
}

//Evento para el botón de pedir carta
const botonPedirCarta = document.getElementById("pedirCartaBtn");
botonPedirCarta?.addEventListener("click", pedirCarta);

// Evento para el botón de plantarse
const botonPlantarse = document.getElementById("plantarseBtn");
botonPlantarse?.addEventListener("click", plantarse);

// Evento para el botón de reinicio
const botonReinicio = document.getElementById("reiniciarBtn");
botonReinicio?.addEventListener("click", reiniciarJuego);
