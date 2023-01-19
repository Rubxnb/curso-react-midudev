import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner,checEndGame } from './logic/board'
import Winner from './components/Winner'

function App() {

  const [board, setBoard] = useState(() => {
      const boardFromStorage = window.localStorage.getItem('board')
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)

  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const updateBoard = (index) => {

    // no actualizamos la posición
    // si ya tiene algo
    if(board[index] || winner) return;

    // actualizar tablero
    const newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // actualizar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

  // guardar la partida en local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    
    // revisar ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
    } else if(checEndGame(newBoard)) {
      setWinner(false); // empate
    }
  }

  return (
    <main className="board">
      <h1> Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game"> 
        {
          board.map((square, index) => {
            return(
              // * para renderizar una lista de elementos usamos la key
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>  
            );
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <Winner winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
