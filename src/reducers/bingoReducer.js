import { handleActions } from "redux-actions";
import { CHECK, RESET } from "./bingoTypes";


const bingoLength = 5;

const initialBingoBoard = () => {
  const numberArray = [];
  for (let i = 0; i < bingoLength * bingoLength; i++) {
    numberArray.push(i);
  }

  const shuffledArray = [];
  for (let i = 0; i < bingoLength; i++) {
    const row = [];
    for (let j = 0; j < bingoLength; j++) {
      const randomNumber = numberArray.splice(
        Math.floor(Math.random() * numberArray.length),
        1
      )[0];
      row.push(randomNumber);
    }
    shuffledArray.push(row);
  }

  return shuffledArray;
};

const allBingoList = (board) => {
  const allBingoList = board.map(r => r.toString());

  for(let i = 0; i < bingoLength; i++) {
    const bingoList = [];
    for(let j = 0; j < bingoLength; j++) {
      bingoList.push(board[j][i])
    }
    allBingoList.push(bingoList.toString());
  }

  // \ shape bingo
  const backSlashBingo = [];
  // / shape bingo
  const slashBingo = [];

  for(let i = 0; i < bingoLength; i++) {
      backSlashBingo.push(board[i][i]);
      slashBingo.push(board[i][bingoLength - i - 1]);
  }
  
  allBingoList.push(backSlashBingo.toString());
  allBingoList.push(slashBingo.toString());

  return allBingoList;
};

const initialState = () => {
  const board1 = initialBingoBoard();
  const board2 = initialBingoBoard();

  return {
    isStart: false,
    turn: 1,
    checkedNumbers: {},
    board1,
    allBingoList1: allBingoList(board1),
    completedBingoList1: [],
    board2,
    allBingoList2: allBingoList(board2),
    completedBingoList2: []
  };
};

export default handleActions(
  {
    [CHECK]: (state, action) => {
      const newState = { ...state };
      if (state.checkedNumbers[action.number]) {
        return newState;
      }

      if (action.player !== state.turn) {
        alert("잘못된 차레입니다.");
        return newState;
      }

      const checkedNumbers = { ...state.checkedNumbers };
      checkedNumbers[action.number] = true;
      newState.checkedNumbers = checkedNumbers;
      newState.turn = state.turn === 1 ? 2 : 1;

      return newState;
    },
    [RESET]: () => {
      const newState = initialState();
      newState.isStart = true;

      return newState;
    }
  },
  initialState()
);
