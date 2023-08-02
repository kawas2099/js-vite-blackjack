import {takeCard} from './take-card'

/**
 * 
 * @param {String} card 
 * @returns {Number} Returns the numeric value of the card
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length-1);
    return (!isNaN(value)) ? value *1:(value === 'A') ? 11: 10
}