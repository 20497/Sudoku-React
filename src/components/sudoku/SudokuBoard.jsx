import React from "react";
import { SudokuFieldGrid } from "../../styles/sudoku/SudokuBoard.styles";
import { GameContext } from "../../context/GameContext";
import SudokuBlock from "./SudokuBlock";

export default function SudokuBoard() {
  const { gameState, gameDispatch } = React.useContext(GameContext);

  const [board, setBoard] = React.useState();

  const handleGameBoardAndSolution = React.useCallback(
    (board, solution) => {
      gameDispatch({
        type: "HANDLE_SUDOKU_BOARD",
        board: board,
        solution: solution,
      });
    },
    [gameDispatch]
  );

  React.useEffect(() => {
    fetch(
      `https://sugoku.herokuapp.com/board?difficulty=${gameState.dificultLevel}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
      .then((response) => response.json())
      .then((data) => setBoard(data.board));
  }, [gameState.dificultLevel]);

  React.useEffect(() => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => `${key}=%5B${encodeBoard(params[key])}%5D`)
        .join("&");

    if (board !== undefined) {
      fetch("https://sugoku.herokuapp.com/solve", {
        method: "POST",
        body: encodeParams({ board: board }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => response.json())
        .then((data) => handleGameBoardAndSolution(board, data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  return (
    <>
      {gameState.board !== undefined && (
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
      )}
    </>
  );
}
