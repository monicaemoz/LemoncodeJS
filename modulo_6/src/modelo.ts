interface Partida {
  puntuacion: number;
}

export const partida: Partida = {
  puntuacion: 0,
};

//Interfaz cartas
export interface Cartas {
  valor: number;
  texto: string;
  img: string;
}

// Cartas y sus valores
export const cartas: Cartas[] = [
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
