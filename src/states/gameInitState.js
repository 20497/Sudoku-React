export const gameInitState = {
  playerName: "",
  dificultLevel: null,
  statistics: {
    //Ex { dificultLevel: "easy", points: 324 }
  },
  board: [],
  solution: [],
  moveSnapshot: null, // last filled input
  lifebelt: {
    backMove: true,
    posibleNumbers: true,
    oneFieldResult: true,
  },
};
