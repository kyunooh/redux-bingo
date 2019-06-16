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

const allBingoList = board => {
  const allBingoList = board.map(r => r);

  for (let i = 0; i < bingoLength; i++) {
    const bingoList = [];
    for (let j = 0; j < bingoLength; j++) {
      bingoList.push(board[j][i]);
    }
    allBingoList.push(bingoList);
  }

  // \ shape bingo
  const backSlashBingo = [];
  // / shape bingo
  const slashBingo = [];

  for (let i = 0; i < bingoLength; i++) {
    backSlashBingo.push(board[i][i]);
    slashBingo.push(board[i][bingoLength - i - 1]);
  }

  allBingoList.push(backSlashBingo);
  allBingoList.push(slashBingo);

  return allBingoList;
};

const checkBingo = state => {
  const newState = { ...state };
  const { allBingoList1, allBingoList2 } = newState;

  const completedBingoList1 = [...state.completedBingoList1];
  const completedBingoList2 = [...state.completedBingoList2];

  for (let i = 0; i < allBingoList1.length; i++) {
    for (let j = 0; j < bingoLength; j++) {
      const bingo = allBingoList1[i];
      if (!state.checkedNumbers[bingo[j]]) break;
      if (j === bingoLength - 1) {
        if (!completedBingoList1.includes(bingo.toString())) {
          completedBingoList1.push(bingo.toString());
        }
      }
    }
  }

  for (let i = 0; i < allBingoList2.length; i++) {
    for (let j = 0; j < bingoLength; j++) {
      const bingo = allBingoList2[i];
      if (!state.checkedNumbers[bingo[j]]) break;
      if (j === bingoLength - 1) {
        if (!completedBingoList2.includes(bingo.toString())) {
          completedBingoList2.push(bingo.toString());
        }
      }
    }
  }
  newState.completedBingoList1 = completedBingoList1;
  newState.completedBingoList2 = completedBingoList2;
  return newState;
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

function checkScore(state) {
  const score1 = state.completedBingoList1.length;
  const score2 = state.completedBingoList2.length;
  if(score1 >= 5 || score2 >= 5) {
    if(score1 > score2) {
      alert("1P가 승리하였습니다.");
    } else if (score1 < score2) {
      alert("2P가 승리하였습니다.");
    } else {
      alert("무승부입니다!");
    }

    return initialState();
  }

  return state;
}

export default handleActions(
  {
    [CHECK]: (state, action) => {
      let newState = { ...state };
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
      newState.turn = newState.turn === 1 ? 2 : 1;
      newState = checkBingo(newState);
      newState = checkScore(newState)
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
