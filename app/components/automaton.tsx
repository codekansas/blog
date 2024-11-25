"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  numRows?: number;
  numCols?: number;
}

const Automaton = ({ numRows = 100, numCols = 100 }: Props) => {
  const pattern = useMemo(
    () => [
      [0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
    ],
    []
  );

  const [grid, setGrid] = useState<number[][]>(() => {
    const rows: number[][] = Array.from({ length: numRows }, () =>
      Array(numCols).fill(0)
    );

    const patternRows = pattern.length;
    const patternCols = pattern[0].length;
    const startRow = Math.floor((numRows - patternRows) / 2);
    const startCol = Math.floor((numCols - patternCols) / 2);

    for (let i = 0; i < patternRows; i++) {
      for (let j = 0; j < patternCols; j++) {
        rows[startRow + i][startCol + j] = pattern[i][j];
      }
    }

    return rows;
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const cellSize = 10;
    const gap = 2;
    let prevMousePos: { x: number; y: number } = { x: 0, y: 0 };

    const drawGrid = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      grid.forEach((row, i) => {
        row.forEach((cell, j) => {
          context.fillStyle = cell ? "#000000" : "#FFFFFF";
          context.fillRect(
            j * cellSize + gap / 2,
            i * cellSize + gap / 2,
            cellSize - gap,
            cellSize - gap
          );
        });
      });
    };

    const clearCircle = (
      grid: number[][],
      cx: number,
      cy: number,
      radius: number
    ) => {
      const newGrid = grid.map((row, i) =>
        row.map((cell, j) => {
          const dx = j - cx;
          const dy = i - cy;
          if (dx * dx + dy * dy <= radius * radius) {
            return 0; // Clear the cell
          }
          return cell;
        })
      );
      return newGrid;
    };

    const handleMove = (x: number, y: number) => {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      setGrid((prevGrid) => {
        let newGrid = clearCircle(prevGrid, col, row, 8);

        if (prevMousePos) {
          const prevCol = Math.floor(prevMousePos.x / cellSize);
          const prevRow = Math.floor(prevMousePos.y / cellSize);

          // Interpolate between previous and current positions
          const dx = col - prevCol;
          const dy = row - prevRow;
          const steps = Math.max(Math.abs(dx), Math.abs(dy));

          for (let step = 1; step <= steps; step++) {
            const t = step / steps;
            const interpolatedCol = Math.floor(prevCol + dx * t);
            const interpolatedRow = Math.floor(prevRow + dy * t);
            newGrid = clearCircle(newGrid, interpolatedCol, interpolatedRow, 4);
          }
        }

        prevMousePos.x = x;
        prevMousePos.y = y;
        return newGrid;
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) * (canvas.width / rect.width);
      const y = (event.clientY - rect.top) * (canvas.height / rect.height);
      handleMove(x, y);
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
      const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
      handleMove(x, y);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    drawGrid();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [grid]);

  useEffect(() => {
    const getNeighbors = (grid: number[][], row: number, col: number) => {
      let neighbors = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const ni = (row + x + numRows) % numRows;
          const nj = (col + y + numCols) % numCols;
          neighbors += grid[ni][nj];
        }
      }
      return neighbors;
    };

    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);
        const candidates = new Set<string>();

        prevGrid.forEach((row, i) => {
          row.forEach((cell, j) => {
            if (cell === 1) {
              candidates.add(`${i},${j}`);
              for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                  const ni = (i + x + numRows) % numRows;
                  const nj = (j + y + numCols) % numCols;
                  candidates.add(`${ni},${nj}`);
                }
              }
            }
          });
        });

        candidates.forEach((key) => {
          const [i, j] = key.split(",").map(Number);
          const neighbors = getNeighbors(prevGrid, i, j);
          if (prevGrid[i][j] === 1 && (neighbors < 2 || neighbors > 5)) {
            newGrid[i][j] = 0;
          } else if (prevGrid[i][j] === 0 && neighbors === 3) {
            newGrid[i][j] = 1;
          }
        });

        return newGrid;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [numRows, numCols]);

  return (
    <canvas
      ref={canvasRef}
      width={numCols * 10}
      height={numRows * 10}
      style={{ maxWidth: "100%" }}
    />
  );
};

export default Automaton;
