import React from "react";
import BingoStartButtonComponent from "./BingoStartButtonComponent";
import { connect } from "react-redux";
import * as bingoActions from "../../reducers/bingoActions";

const BingoStartButtonContainer = props => {
  const handleReset = () => {
    props.reset();
  };

  return (
    <BingoStartButtonComponent reset={handleReset} isStart={props.isStart} />
  );
};

export default connect(
  state => ({ ...state.bingoReducer }),
  dispatch => ({
    reset: () => dispatch(bingoActions.reset())
  })
)(BingoStartButtonContainer);
