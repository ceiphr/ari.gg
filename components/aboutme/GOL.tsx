import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
} from "react";
// @ts-ignore types not provided :(
import Fade from "react-reveal/Fade";
import { useReducedMotion } from "@mantine/hooks";

type Cell = {
  x: number;
  y: number;
};

// I didn't make this. I found it here:
// https://github.com/charlee/react-gameoflife
// I added types, and made it a function component.

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

/**
 * Create a cell at the given x, y position.
 * @param {int} x
 * @param {int} y
 */
const Cell: FunctionComponent<Cell> = ({ x, y }) => {
  return (
    <div
      className="absolute bg-black dark:bg-white opacity-5 dark:opacity-10"
      style={{
        left: `${CELL_SIZE * x}px`,
        top: `${CELL_SIZE * y}px`,
        width: `${CELL_SIZE}px`,
        height: `${CELL_SIZE}px`,
      }}
    />
  );
};

/**
 * Create the initial board.
 * @param {int} rows
 * @param {int} cols
 */
const makeEmptyBoard: Function = (rows: number, cols: number): boolean[][] => {
  let board: boolean[][] = [];
  for (let y = 0; y < rows; y++) {
    board[y] = [];
    for (let x = 0; x < cols; x++) board[y][x] = false;
  }

  return board;
};

const GOL: FunctionComponent = () => {
  const boardRef = useRef<HTMLDivElement>(null),
    [cells, setCells] = useState<{ x: number; y: number }[]>([]),
    rows: number = HEIGHT / CELL_SIZE,
    cols: number = WIDTH / CELL_SIZE,
    board = useRef<boolean[][]>(makeEmptyBoard(rows, cols)),
    reduceMotion = useReducedMotion();

  const makeCells: Function = useCallback((): Cell[] => {
    let cells = [];
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++)
        if (board.current[y][x]) cells.push({ x, y });

    return cells;
  }, [rows, cols, board]);

  /**
   * Calculate the number of neighbors at point (x, y)
   * @param {int} x
   * @param {int} y
   */
  const calculateNeighbors: Function = useCallback(
    (x: number, y: number): number => {
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

  const handleRandom: Function = useCallback((): void => {
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++) board.current[y][x] = Math.random() >= 0.8;

    setCells(makeCells());
  }, [board, rows, cols, makeCells]);

  const runIteration: Function = useCallback((): void => {
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
      if (!reduceMotion) runIteration();
    }, 1000);
  }, [board, rows, cols, calculateNeighbors, makeCells, reduceMotion]);

  useEffect(() => {
    handleRandom();
    if (!reduceMotion) runIteration();
  }, [handleRandom, runIteration, reduceMotion]);

  return (
    <Fade>
      <div
        className="relative bg-white dark:bg-black md:ml-px md:left-1/2"
        ref={boardRef}
      >
        {cells.map((cell) => (
          <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
        ))}
      </div>
    </Fade>
  );
};

export default GOL;
