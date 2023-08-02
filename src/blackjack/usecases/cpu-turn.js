import {takeCard} from './take-card'
import {acumularPuntos} from './acumular-puntos'
import { crearCarta } from '.'
import {determinarGanador} from '.'

/**
 * 
 * @param {Number} userPoints 
 * @param {array<string>} deck
 * @param {array<Number>} puntosJugadores
 */

// turno, points, deck=[], puntosJugadores = [] 
export const cpuTurn = (userPoints, puntosJugadores=[], deck, points,divCartasJugadores) => {
    if(!puntosJugadores) throw new Error('Se necesitan los puntos del player 1')
    if(!deck) throw new Error('Se necesitan el deck')

    let cpuPoints = 0;
    do{
        const card = takeCard(deck);
        cpuPoints = acumularPuntos(card, puntosJugadores.length-1, puntosJugadores, points);
        crearCarta(card,puntosJugadores.length-1,divCartasJugadores);
    }while((userPoints>cpuPoints) && (userPoints<=21));
    determinarGanador(puntosJugadores);
}