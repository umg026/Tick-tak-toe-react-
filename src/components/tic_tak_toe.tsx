import useTickToe from '../hooks/use-tick-toe';

function Tick_tack() {
  const { board, handelClick, getStatusMesage, resetGame } = useTickToe();

  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMesage()}
          <button className="reset-button" onClick={() => resetGame()}>
            Reset Game
          </button>
        </div>

        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handelClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tick_tack;
