//me genera un numero al azar del 1 al 6
function lanzamientoDeDados(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//imprimir podio
function imprimirPodio(primero, segundo, tercero) {
    console.log(
        ` --------------------- PODIO ---------------------\n\n🥇🥇🥇 Jugador: ${primero.nombre} - Puntos: ${primero.puntos}  🥇🥇🥇 \n\n🥈🥈🥈 Jugador: ${segundo.nombre} - Puntos: ${segundo.puntos}  🥈🥈🥈 \n\n🥉🥉🥉 Jugador: ${tercero.nombre} - Puntos: ${tercero.puntos}  🥉🥉🥉 `
    );
}

// participantes en la carrera
const jugador1 = {
    nombre: prompt("Escribir nombre del Primer Jugador: "),
    puntos: 0,
};
const jugador2 = {
    nombre: prompt("Escribir nombre del Segundo Jugador: "),
    puntos: 0,
};
const jugador3 = {
    nombre: prompt("Escribir nombre del Tercero Jugador: "),
    puntos: 0,
};

//podio
let ganador;
let segundoLugar;
let tercerLugar;

//distancia a recorrer por los jugadores en metros 2 kilometros = 20000 metros
const distanciaPista = 20000;

//el ciclo while me da los puntos de los jugadores mientras estos van tirando los dados

confirm("Quieres iniciar este juego?");
while (!ganador || !segundoLugar || !tercerLugar) {
    if (jugador1.puntos >= distanciaPista) {
        if (!ganador) {
            ganador = jugador1;
        } else if (ganador.nombre !== jugador1.nombre && !segundoLugar) {
            segundoLugar = jugador1;
        } else if (
            ganador.nombre !== jugador1.nombre &&
            segundoLugar.nombre !== jugador1.nombre &&
            !tercerLugar
        ) {
            tercerLugar = jugador1;
        }
    }
    // console.log(`Turno del jugador ${jugador1.nombre}`);
    jugador1.puntos = jugador1.puntos + lanzamientoDeDados(1, 6) * 100;

    if (jugador2.puntos >= distanciaPista) {
        if (!ganador) {
            ganador = jugador2;
        } else if (ganador.nombre !== jugador2.nombre && !segundoLugar) {
            segundoLugar = jugador2;
        } else if (
            ganador.nombre !== jugador2.nombre &&
            segundoLugar.nombre !== jugador2.nombre &&
            !tercerLugar
        ) {
            tercerLugar = jugador2;
        }
    }
    // console.log(`Turno del jugador ${jugador2.nombre}`);
    jugador2.puntos = jugador2.puntos + lanzamientoDeDados(1, 6) * 100;

    if (jugador3.puntos >= distanciaPista) {
        if (!ganador) {
            ganador = jugador3;
        } else if (ganador.nombre !== jugador3.nombre && !segundoLugar) {
            segundoLugar = jugador3;
        } else if (
            ganador.nombre !== jugador3.nombre &&
            segundoLugar.nombre !== jugador3.nombre &&
            !tercerLugar
        ) {
            tercerLugar = jugador3;
        }
    }
    // console.log(`Turno del jugador ${jugador3.nombre}`);
    jugador3.puntos = jugador3.puntos + lanzamientoDeDados(1, 6) * 100;
}

imprimirPodio(ganador, segundoLugar, tercerLugar);