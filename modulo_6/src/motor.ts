import { partida, Cartas, cartas } from "./modelo";

export const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * cartas.length);
};

// Función para obtener una carta aleatoria *
export function dameCarta(numeroAleatorio: number): Cartas {
  const carta = cartas[numeroAleatorio];
  return carta;
}

// Función para sumar la puntuación (Incluir en cada vez q se pida una carta)
export function sumarPuntuacion(carta: Cartas) {
  return (partida.puntuacion += carta.valor);
}

//Obtener mensaje cuando te plantas
export const obtenerMensajeCuandoMePlanto = () => {
  if (partida.puntuacion < 4) {
    return `Te has quedado lejos con ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion === 5) {
    return `Tenías miedo, te quedaste en ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion >= 6 && partida.puntuacion < 7.5) {
    return `Casi lo logras, conseguiste ${partida.puntuacion} puntos.`;
  } else if (partida.puntuacion === 7.5) {
    return `¡Has ganado! Llegaste a ${partida.puntuacion} puntos.`;
  }
  return `Error, nose porque estas aqui`;
};
