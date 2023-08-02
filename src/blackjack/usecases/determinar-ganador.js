

/**
 * This method selects the winner
 * @param {array} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores)=>{
    const [userPoints, cpuPoints] = puntosJugadores;
    setTimeout(()=>{
        if (userPoints === cpuPoints){
            alert('It is a Tie')
        }else if (userPoints<=21 && userPoints>cpuPoints || cpuPoints>21) {
            alert("You WON!!!");
        }else {
            alert('You Loose');
    }
    },100);
}