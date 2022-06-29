import React from "react";

export default function useSudoku() {
  const [board, setBoard] = React.useState();
  const [solution, setSolution] = React.useState();

  React.useEffect(() => {
    fetch(`https://sugoku.herokuapp.com/board?difficulty=easy`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((data) => setBoard(data.board));
  }, []);

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
        .then((data) => setSolution(data));
    }
  }, [board]);

  return [board, solution];
}
