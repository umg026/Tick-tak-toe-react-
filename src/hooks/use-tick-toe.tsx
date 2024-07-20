import { useState } from 'react';

const initiaalBoard: (null | string)[] = Array(9).fill(null);

const useTickToe = () => {
  const [board, setBoard] = useState<(null | string)[]>(initiaalBoard);
  const [isNext, setIsNext] = useState<boolean>(true);
  const WINNING_PATTERNS: number[][] = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (board: (null | string)[]): null | string => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const handelClick = (index: number) : void => {
    // console.log('index', index);
    const winner: any = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const getStatusMesage = () :string => {
    const winner = calculateWinner(board);

    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `Its Draw!`;

    return `Player ${isNext ? 'X' : 'O'} Turn`;
  };
  const resetGame = () => {
    setBoard(initiaalBoard);
    setIsNext(true);
  };

  return {
    board,
    handelClick,
    calculateWinner,
    getStatusMesage,
    resetGame,
    isNext,
    setIsNext,
    setBoard,
  };
};
export default useTickToe;
