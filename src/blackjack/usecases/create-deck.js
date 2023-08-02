import _ from 'underscore'

/**
 * Esta funcion crea un nuevo Deck
 * @param {array<string>} cardTypes Ejemplo ['C','H','S','D']
 * @param {array<string>} cardSpecials Ejemplo ['A','J','Q','K']
 * @returns {array<string>}
 */
export const createDeck = (cardTypes, cardSpecials) => {
        if (!cardTypes || cardTypes.length === 0) {
            throw new Error('Tipos de carta es obligatorio como un array de strings')
        }
    
    
    
    
    let deck=[];
        for (let i = 2; i <= 10; i++) {
            for(let type of cardTypes){
                deck.push(i+type);
            }
        }

        for(let special of cardSpecials){
            for(let type of cardTypes){
                deck.push(special+type)
            }
        }
        return _.shuffle(deck)
    }