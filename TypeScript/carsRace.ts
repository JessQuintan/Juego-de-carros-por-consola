const miStorage = window.localStorage;

const data = JSON.parse(miStorage.getItem("data")) || [];

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

  //este metodo  hace que el jugador avance, con el lanzaminto de los dados genera la distancia que recorre el jugador y ademas valida si termino la carrera o no
  jugar() {
    this.puntos += this.lanzamientoDeDados();
    if (this.puntos >= this.distancia) {
      this.juegoTerminado = true;
    }
    return false;
  }
}
// imprime el podio
function imprimirPodio(primero: Puestos, segundo: Puestos, tercero: Puestos) {
  console.log(
    ` --------------------- PODIO ---------------------\n\nš„š„š„ Jugador: ${primero.nombre} - Puntos: ${primero.puntos}  š„š„š„ \n\nš„š„š„ Jugador: ${segundo.nombre} - Puntos: ${segundo.puntos}  š„š„š„ \n\nš„š„š„ Jugador: ${tercero.nombre} - Puntos: ${tercero.puntos}  š„š„š„ `
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

//variables auxiliares donde se guardaran las posiciones de la carrera
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

// el ciclo while nos permite ejecutar el metodo jugar () hasta que los participantes terminan la carrera
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

const datosjugador = [primerLugar, segundoLugar, tercerLugar];
const newData = [...data, ...datosjugador];

localStorage.setItem("data", JSON.stringify(newData));

imprimirPodio(primerLugar, segundoLugar, tercerLugar);
