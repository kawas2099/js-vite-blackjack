import _ from 'underscore';
import {cardValue, createDeck, takeCard, cpuTurn, acumularPuntos, crearCarta, determinarGanador} from './usecases';

const miModulo = (()=>{  // PATRON MODULO
    'use strict'

    let deck = [];
    const types = ['C','H','S','D'],
          specials = ['A','J','Q','K'];

    let puntosJugadores = [];
    

    //References
    const btnNewCard = document.querySelector('#btnNewCard'),
          btnStop = document.querySelector('#btnStop'),
          btnNewGame = document.querySelector('#btnNewGame');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          points = document.querySelectorAll('small');

    btnNewCard.disabled = true;
    btnStop.disabled = true;

    const inicializarJuego = (numJugadores = 2)=>{
        deck = createDeck(types,specials);
        console.log(deck)
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        points.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerHTML='');
        btnNewCard.disabled = false;
        btnStop.disabled = false;
    }

    // events

    btnNewCard.addEventListener('click', () => {
        
        console.log(deck)
        const card = takeCard(deck);
        const userPoints = acumularPuntos(card, 0, puntosJugadores, points);
        crearCarta(card,0,divCartasJugadores);

        if (userPoints>21) {
            console.log('Perdiste')
            btnNewCard.disabled = true;
            btnStop.disabled = true;
            cpuTurn(userPoints,puntosJugadores,deck, points, divCartasJugadores, puntosJugadores);
        }else if (userPoints===21) {
            console.log('llegaste a 21')
            btnNewCard.disabled = true;
        }
    })

    btnStop.addEventListener('click', () => {
        const[userPoints, cpuPoints] = puntosJugadores
        btnNewCard.disabled = true;
        btnStop.disabled = true;
        cpuTurn(userPoints,puntosJugadores,deck, points, divCartasJugadores, puntosJugadores);
    });

    btnNewGame.addEventListener('click', () => {

        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})()







