export const gameInitState = {
  user: "",
  dificultLevel: null,
  statistics: {
    //Ex { dificultLevel: "easy", points: 324 }
  },
  field: [],
  moveSnapshot: null, // last filled input
  lifebelt: {
    backMove: true,
    posibleNumbers: true,
    oneFieldResult: true,
  },
};
