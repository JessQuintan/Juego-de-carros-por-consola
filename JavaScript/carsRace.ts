//distancia a recorrer por los jugadores 2 kilometros = 20000 metros
const distanciaTotal = 20000;

//instancia jugador, este objeto tiene atributos que ayudaran a determinar el nombre del jugador, distancia recorrida y los puntos que saco
class Jugador {
  nombre: string;
  distancia: number;
  puntos: number = 0;
  juegoTerminado: boolean = false;

  constructor(nombre: string, distancia: number) {
    this.nombre = nombre;
    this.distancia = distancia;
  }
  // genera un numero al azar del 1 al 6 y lo multiplica por 100
  lanzamientoDeDados() {
    return Math.round(Math.random() * (6 - 1) + 1) * 100;
  }

  //este metodo  genera la distancia que recorre los jugadores y el ganador
  jugar() {
    this.puntos += this.lanzamientoDeDados();
    if (this.puntos >= this.distancia) {
      this.juegoTerminado = true;
    }
    return false;
  }
}
// imprime el podio en orden de llegada
function imprimirPodio(primero: Puestos, segundo: Puestos, tercero: Puestos) {
  console.log(
    ` --------------------- PODIO ---------------------\n\n🥇🥇🥇 Jugador: ${primero.nombre} - Puntos: ${primero.puntos}  🥇🥇🥇 \n\n🥈🥈🥈 Jugador: ${segundo.nombre} - Puntos: ${segundo.puntos}  🥈🥈🥈 \n\n🥉🥉🥉 Jugador: ${tercero.nombre} - Puntos: ${tercero.puntos}  🥉🥉🥉 `
  );
}

interface Puestos {
  nombre: string;
  puntos: number;
}
const nombre1: string = prompt("Ingrese nombre del primer jugador: ") || "";
const nombre2: string = prompt("Ingrese nombre del primer jugador: ") || "";
const nombre3: string = prompt("Ingrese nombre del primer jugador: ") || "";

const jugadorUno = new Jugador(nombre1, distanciaTotal);
const jugadorDos = new Jugador(nombre2, distanciaTotal);
const jugadorTres = new Jugador(nombre3, distanciaTotal);

//declaro las posiciones de los jugadores
let primerLugar: Puestos = {
  nombre: "",
  puntos: 0,
};
let segundoLugar = {
  nombre: "",
  puntos: 0,
};
let tercerLugar = {
  nombre: "",
  puntos: 0,
};

confirm("Desea inicar la partida?");

//el ciclo while me da los nombres y puntos de los jugadores mientras estos van tirando los dados
while (!primerLugar.nombre || !segundoLugar.nombre || !tercerLugar.nombre) {
  // --------------------------------------------------------
  if (jugadorUno.puntos >= distanciaTotal) {
    if (!primerLugar.nombre) {
      primerLugar.nombre = jugadorUno.nombre;
      primerLugar.puntos = jugadorUno.puntos;
    } else if (
      primerLugar.nombre !== jugadorUno.nombre &&
      !segundoLugar.nombre
    ) {
      segundoLugar.nombre = jugadorUno.nombre;
      segundoLugar.puntos = jugadorUno.puntos;
    } else if (
      primerLugar.nombre !== jugadorUno.nombre &&
      segundoLugar.nombre !== jugadorUno.nombre &&
      !tercerLugar.nombre
    ) {
      tercerLugar.nombre = jugadorUno.nombre;
      tercerLugar.puntos = jugadorUno.puntos;
    }
  }
  jugadorUno.jugar();
  // --------------------------------------------------------

  if (jugadorDos.puntos >= distanciaTotal) {
    if (!primerLugar.nombre) {
      primerLugar.nombre = jugadorDos.nombre;
      primerLugar.puntos = jugadorDos.puntos;
    } else if (
      primerLugar.nombre !== jugadorDos.nombre &&
      !segundoLugar.nombre
    ) {
      segundoLugar.nombre = jugadorDos.nombre;
      segundoLugar.puntos = jugadorDos.puntos;
    } else if (
      primerLugar.nombre !== jugadorDos.nombre &&
      segundoLugar.nombre !== jugadorDos.nombre &&
      !tercerLugar.nombre
    ) {
      tercerLugar.nombre = jugadorDos.nombre;
      tercerLugar.puntos = jugadorDos.puntos;
    }
  }
  jugadorDos.jugar();

  // --------------------------------------------------------
  if (jugadorTres.puntos >= distanciaTotal) {
    if (!primerLugar.nombre) {
      primerLugar.nombre = jugadorTres.nombre;
      primerLugar.puntos = jugadorTres.puntos;
    } else if (
      primerLugar.nombre !== jugadorTres.nombre &&
      !segundoLugar.nombre
    ) {
      segundoLugar.nombre = jugadorTres.nombre;
      segundoLugar.puntos = jugadorTres.puntos;
    } else if (
      primerLugar.nombre !== jugadorTres.nombre &&
      segundoLugar.nombre !== jugadorTres.nombre &&
      !tercerLugar.nombre
    ) {
      tercerLugar.nombre = jugadorTres.nombre;
      tercerLugar.puntos = jugadorTres.puntos;
    }
  }
  jugadorTres.jugar();
}

// console.log( `${primerLugar}, ${segundoLugar, tercerLugar` )

imprimirPodio(primerLugar, segundoLugar, tercerLugar);
