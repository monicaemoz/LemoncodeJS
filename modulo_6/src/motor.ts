import { partida, Cartas, cartas } from "./modelo";

// Función para obtener una carta aleatoria
export function dameCarta(): Cartas {
  const carta = cartas[Math.floor(Math.random() * cartas.length)];
  return carta;
}

// Función para sumar la puntuación (Incluir en cada vez q se pida una carta)
export function sumarPuntuacion(carta: Cartas) {
  partida.puntuacion += carta.valor;
}
