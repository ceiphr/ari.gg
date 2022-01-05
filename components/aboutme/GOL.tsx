import React, { useRef, useState, useEffect, useCallback } from "react";

// https://github.com/charlee/react-gameoflife
const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

const Cell = ({ x, y }: { x: number; y: number }) => {
  return (
    <div
      className="absolute bg-black/10 dark:bg-white/10"
      style={{
        left: `${CELL_SIZE * x + 1}px`,
        top: `${CELL_SIZE * y + 1}px`,
        width: `${CELL_SIZE - 1}px`,
        height: `${CELL_SIZE - 1}px`,
      }}
    />
  );
};

const makeEmptyBoard = (rows: number, cols: number): boolean[][] => {
  let board: boolean[][] = [];
  for (let y = 0; y < rows; y++) {
    board[y] = [];
    for (let x = 0; x < cols; x++) board[y][x] = false;
  }

  return board;
};

const getElementOffset = (boardRef: HTMLDivElement) => {
  const rect = boardRef.getBoundingClientRect();
  const doc = document.documentElement;

  return {
    x: rect.left + window.pageXOffset - doc.clientLeft,
    y: rect.top + window.pageYOffset - doc.clientTop,
  };
};

const GOL = () => {
  const boardRef = useRef<HTMLDivElement>(null),
    [cells, setCells] = useState<{ x: number; y: number }[]>([]),
    rows: number = HEIGHT / CELL_SIZE,
    cols: number = WIDTH / CELL_SIZE;
  const board = useRef<boolean[][]>(makeEmptyBoard(rows, cols));

  const makeCells = useCallback(() => {
    let cells = [];
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++)
        if (board.current[y][x]) cells.push({ x, y });

    return cells;
  }, [rows, cols, board]);

  /**
   * Calculate the number of neighbors at point (x, y)
   * @param {Array} board
   * @param {int} x
   * @param {int} y
   */
  const calculateNeighbors = useCallback(
    (x: number, y: number) => {
      let neighbors = 0;
      const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
      ];
      for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let y1 = y + dir[0];
        let x1 = x + dir[1];

        if (
          x1 >= 0 &&
          x1 < cols &&
          y1 >= 0 &&
          y1 < rows &&
          board.current[y1][x1]
        ) {
          neighbors++;
        }
      }

      return neighbors;
    },
    [rows, cols]
  );

  const handleRandom = useCallback(() => {
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++) board.current[y][x] = Math.random() >= 0.8;

    setCells(makeCells());
  }, [board, rows, cols, makeCells]);

  const runIteration = useCallback(() => {
    let newBoard = makeEmptyBoard(rows, cols);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++) {
        let neighbors = calculateNeighbors(x, y);

        if (board.current[y][x]) {
          if (neighbors === 2 || neighbors === 3) newBoard[y][x] = true;
          else newBoard[y][x] = false;
        } else if (!board.current[y][x] && neighbors === 3)
          newBoard[y][x] = true;
      }

    board.current = newBoard;
    setCells(makeCells());

    setTimeout(() => {
      runIteration();
      console.log("running");
    }, 1000);
  }, [board, rows, cols, calculateNeighbors, makeCells]);

  useEffect(() => {
    handleRandom();
    runIteration();
  }, [handleRandom, runIteration]);

  return (
    <div className="relative bg-white dark:bg-black md:left-1/2" ref={boardRef}>
      {cells.map((cell) => (
        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
      ))}
    </div>
  );
};

export default GOL;
