import {cardValue} from './card-value'

/**
 * Sum players points
 * @param {string} carta 
 * @param {Number} turno 
 * @param {array} puntosJugadores 
 * @param {array} points 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, points )=>{
    puntosJugadores[turno] = puntosJugadores[turno] + cardValue(carta);
    points[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}