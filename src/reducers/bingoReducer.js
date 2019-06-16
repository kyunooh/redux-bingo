import { handleActions } from "redux-actions";
import {CHECK} from "./bingoTypes";

const initialBingoBoard = () => {
  const numberArray = [];
  for (let i = 0; i < 25; i++) {
    numberArray.push(i);
  }

  const shuffledArray = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
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

const resetState = {
  turn: 1,
  checkedNumbers: {},
  board1: initialBingoBoard(),
  board2: initialBingoBoard()
};





export default handleActions({
  [CHECK]: (state, action) => {
    const newState = { ...state };
    if(state.checkedNumbers[action.number]) {
      return newState;
    }

    if(action.player !== state.turn) {
      alert("잘못된 차레입니다.");
      return newState;
    }

    const checkedNumbers = { ...state.checkedNumbers };
    checkedNumbers[action.number] = true;
    newState.checkedNumbers = checkedNumbers;
    newState.turn = state.turn === 1 ? 2 : 1;

    return newState;
  }
}, resetState);
