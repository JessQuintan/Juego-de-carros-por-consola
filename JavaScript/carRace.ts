const distanciaTotal = 20000;

class Jugador {
  nombre: string;
  distancia: number;
  puntos: number = 0;
  juegoTerminado: boolean = false;

  constructor(nombre: string, distancia: number) {
    this.nombre = nombre;
    this.distancia = distancia;
  }

  lanzamientoDeDados() {
    return Math.round(Math.random() * (6 - 1) + 1) * 100;
  }

  jugar() {
    this.puntos += this.lanzamientoDeDados();
    if (this.puntos >= this.distancia) {
      this.juegoTerminado = true;
    }
    return false;
  }
}

// function imprimirPodio(primero, segundo, tercero) {
//   console.log(
//     ` --------------------- PODIO ---------------------\n\n🥇🥇🥇 Jugador: ${primero.nombre} - Puntos: ${primero.puntos}  🥇🥇🥇 \n\n🥈🥈🥈 Jugador: ${segundo.nombre} - Puntos: ${segundo.puntos}  🥈🥈🥈 \n\n🥉🥉🥉 Jugador: ${tercero.nombre} - Puntos: ${tercero.puntos}  🥉🥉🥉 `
//   );
// }

interface Puestos {
  nombre: string;
  puntos: number;
}

const jugadorUno = new Jugador(
  prompt("Ingrese nombre del primer jugador: "),
  distanciaTotal
);
const jugadorDos = new Jugador(
  prompt("Ingrese nombre del segundo jugador: "),
  distanciaTotal
);
const jugadorTres = new Jugador(
  prompt("Ingrese nombre del tercer jugador: "),
  distanciaTotal
);

let primerLugar;
let segundoLugar;
let tercerLugar;

confirm("Desea inicar la partida?");
while (!primerLugar || !segundoLugar || !tercerLugar) {
  // --------------------------------------------------------
  if (jugadorUno.puntos >= distanciaTotal) {
    if (!primerLugar) {
      primerLugar = jugadorUno.nombre;
    } else if (primerLugar !== jugadorUno.nombre && !segundoLugar) {
      segundoLugar = jugadorUno.nombre;
    } else if (
      primerLugar !== jugadorUno.nombre &&
      segundoLugar !== jugadorUno.nombre &&
      !tercerLugar
    ) {
      tercerLugar = jugadorUno.nombre;
    }
  }
  jugadorUno.jugar();
  // --------------------------------------------------------

  if (jugadorDos.puntos >= distanciaTotal) {
    if (!primerLugar) {
      primerLugar = jugadorDos.nombre;
    } else if (primerLugar !== jugadorDos.nombre && !segundoLugar) {
      segundoLugar = jugadorDos.nombre;
    } else if (
      primerLugar !== jugadorDos.nombre &&
      segundoLugar !== jugadorDos.nombre &&
      !tercerLugar
    ) {
      tercerLugar = jugadorDos.nombre;
    }
  }
  jugadorDos.jugar();

  // --------------------------------------------------------
  if (jugadorTres.puntos >= distanciaTotal) {
    if (!primerLugar) {
      primerLugar = jugadorTres.nombre;
    } else if (primerLugar !== jugadorTres.nombre && !segundoLugar) {
      segundoLugar = jugadorTres.nombre;
    } else if (
      primerLugar !== jugadorTres.nombre &&
      segundoLugar !== jugadorTres.nombre &&
      !tercerLugar
    ) {
      tercerLugar = jugadorTres.nombre;
    }
  }
  jugadorTres.jugar();
}

// imprimirPodio(primerLugar, segundoLugar, tercerLugar);
