import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    // revisa todas las combinaciones ganadoras
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  }

 export const checEndGame = (newBoard) => {
    // comprueba que todos los cuadrados son distintos de null
    // (está relleno)
    return newBoard.every((square) => square !== null);
  }