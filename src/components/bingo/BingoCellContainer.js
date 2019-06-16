import React from "react";
import * as bingoActions from "../../reducers/bingoActions";
import "./BingoCell.css";
import BingoCellComponent from "./BingoCellComponent";
import { connect } from "react-redux";

const BingoCellContainer = props => {
  const handleCheck = () => {
    props.check(props.player, props.number);
  };

  const checked = () => {
    return props.checkedNumbers[props.number];
  };

  return (
    <BingoCellComponent
      check={handleCheck}
      checked={checked()}
      number={props.number}
    />
  );
};

export default connect(
  state => ({ ...state.bingoReducer }),
  dispatch => ({
    check: (player, number) => dispatch(bingoActions.check(player, number))
  })
)(BingoCellContainer);
