import React from "react";
import { SudokuFieldGrid } from "../../styles/sudoku/SudokuBoard.styles";
import { GameContext } from "../../context/GameContext";
import useSudoku from "../../hooks/useSudoku";
import Loading from "../Loading";
import SudokuBlock from "./SudokuBlock";

export default function SudokuBoard() {
  const [sudokuBoard, sudokuSolution] = useSudoku();

  const { gameState, gameDispatch } = React.useContext(GameContext);

  const handleGameBoardAndSolution = React.useCallback(() => {
    gameDispatch({
      type: "HANDLE_SUDOKU_BOARD",
      board: sudokuBoard,
      solution: sudokuSolution,
    });
  }, [gameDispatch, sudokuBoard, sudokuSolution]);

  React.useEffect(() => {
    handleGameBoardAndSolution();
  }, [handleGameBoardAndSolution]);

  return (
    <>
      {gameState.board !== undefined ? (
        <SudokuFieldGrid
          css={{
            marginTop: "5%",
            width: "700px",
            height: "700px",
          }}
        >
          {gameState.board.map((block, index) => (
            <SudokuBlock
              key={`block-${index}`}
              block={block}
              blockIndex={index}
            />
          ))}
        </SudokuFieldGrid>
      ) : (
        <Loading />
      )}
    </>
  );
}
