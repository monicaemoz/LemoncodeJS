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

const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * cartas.length);
};

// Función para obtener una carta aleatoria *
function dameCarta(numeroAleatorio: number): Cartas {
  const carta = cartas[numeroAleatorio];
  return carta;
}

// Función para mostrar la carta
function mostrarCarta(texto: string, img: string) {
  const elementovalorCarta = document.getElementById("valorCarta");
  if (elementovalorCarta) {
    elementovalorCarta.innerText = texto;
  }

  const cartaImg = document.getElementById("cartaImg");
  if (cartaImg instanceof HTMLImageElement) {
    cartaImg.src = img;
  }
}

// Función para sumar la puntuación (Incluir en cada vez q se pida una carta)
function sumarPuntuacion(carta: Cartas) {
  return (puntuacion += carta.valor);
}

//*
const actualizarPuntuación = (nuevosPuntos: number) => {
  puntuacion = nuevosPuntos;
};

// Función para manejar el evento de pedir carta
function pedirCarta() {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = dameCarta(numeroAleatorio);
  mostrarCarta(carta.texto, carta.img);
  const nuevosPuntos = sumarPuntuacion(carta);
  actualizarPuntuación(nuevosPuntos);
  muestraPuntuacion();
  verificarPartida();
}

//Evento para el botón de pedir carta
const botonPedirCarta = document.getElementById("pedirCartaBtn");

if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
  botonPedirCarta.addEventListener("click", pedirCarta);
}

//Mostrar mensaje*
const mostrarMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerText = mensaje;
  }
};

// Función para verificar si se termina el juego
function verificarPartida() {
  if (puntuacion > 7.5) {
    mostrarMensaje("Has perdido, te has pasado de 7.5 puntos.");
    bloquearJuego(true);
  } else if (puntuacion == 7.5) {
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

//Obtener mensaje cuando te plantas
const obtenerMensajeCuandoMePlanto = () => {
  if (puntuacion < 4) {
    return `Te has quedado lejos con ${puntuacion} puntos.`;
  } else if (puntuacion === 5) {
    return `Tenías miedo, te quedaste en ${puntuacion} puntos.`;
  } else if (puntuacion >= 6 && puntuacion < 7.5) {
    return `Casi lo logras, conseguiste ${puntuacion} puntos.`;
  } else if (puntuacion === 7.5) {
    return `¡Has ganado! Llegaste a ${puntuacion} puntos.`;
  }
  return `Error, nose porque estas aqui`;
};

// Función para manejar el evento de plantarse*
function plantarse() {
  const mensaje: string = obtenerMensajeCuandoMePlanto();
  mostrarMensaje(mensaje);
  bloquearJuego(true);
}

// Evento para el botón de plantarse
const botonPlantarse = document.getElementById("plantarseBtn");

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}

// Función para reiniciar el juego
function reiniciarJuego() {
  actualizarPuntuación(0);
  muestraPuntuacion();
  mostrarCarta("Boca abajo", "src/resources/back.jpg");
  mostrarMensaje("vamos a jugar!");
  bloquearJuego(false);
}

// Evento para el botón de reinicio
const botonReinicio = document.getElementById("reiniciarBtn");

if (botonReinicio && botonReinicio instanceof HTMLButtonElement) {
  botonReinicio.addEventListener("click", reiniciarJuego);
}
