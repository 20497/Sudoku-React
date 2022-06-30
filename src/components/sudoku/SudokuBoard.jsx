import React from "react";
import {
  SudokuWrapper,
  SudokuValidationMessage,
  SudokuFieldGrid,
  SudokuSolveButton,
} from "../../styles/sudoku/SudokuBoard.styles";
import { GameContext } from "../../context/GameContext";
import SudokuBlock from "./SudokuBlock";
import { useForm } from "react-hook-form";

export default function SudokuBoard() {
  const { gameState, gameDispatch } = React.useContext(GameContext);

  const [board, SetBoard] = React.useState();

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

  // Handle sudoku board
  React.useEffect(() => {
    fetch(
      `https://sugoku.herokuapp.com/board?difficulty=${gameState.dificultLevel}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
      .then((response) => response.json())
      .then((data) => SetBoard(data.board));
  }, [gameState.dificultLevel]);

  // Handle sudoku solution
  React.useEffect(() => {
    /**
     * 
     * Encode methods by API creators
     * https://github.com/bertoort/sugoku#note
     * 
     */
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

    // If board is handled, handle solution for this board
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle all cells indexes
    const blockIdexArray = Object.keys(data)
      .sort((a, b) => a - b)
      .map((key) => key[0]);

    // All cells indexes with no repeat
    const blockIndexSet = new Set(blockIdexArray);
    const playerSolution = [];

    // Generate empty matrix
    blockIndexSet.forEach(() => playerSolution.push([]));

    // Add to empty matrix players solution
    Object.entries(data).map((key) =>
      playerSolution[key[0][0]].push(Number(key[1]))
    );

    // Compare players solution with sudoku solution
    JSON.stringify(gameState.solution.solution) ===
    JSON.stringify(playerSolution)
      ? alert("Win!")
      : alert("Try Again");
  };

  return (
    <>
      {Object.keys(errors).length !== 0 && (
        <SudokuValidationMessage>
          Fill all sudoku cells!
        </SudokuValidationMessage>
      )}
      {gameState.board !== undefined && (
        <SudokuWrapper onSubmit={handleSubmit(onSubmit)}>
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
                register={register}
                errors={errors}
              />
            ))}
          </SudokuFieldGrid>
          <SudokuSolveButton type="submit" value="Solve" />
        </SudokuWrapper>
      )}
    </>
  );
}
