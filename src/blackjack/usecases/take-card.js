import { createDeck } from "./create-deck"; 

/**
 * Returns the las element of the array 'deck'
 * @param {array<string>} deck Es un arreglo de strings
 * @returns {string}
 */
export const takeCard = (deck) => {
        
    if (deck.length === 0) {
        throw new Error("The deck is empty")
    }
    return deck.pop();   
}