
/**
 * Create the cards images 
 * @param {string} card 
 * @param {Number} turno 
 * @param {array} divCartasJugadores 
 */
export const crearCarta = (card,turno,divCartasJugadores)=>{
    if(!card) throw new Error('The card is mandatory')

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`
    imgCard.classList.add('carta');
    divCartasJugadores[turno].append(imgCard);
}