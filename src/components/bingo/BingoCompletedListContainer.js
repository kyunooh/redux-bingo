import React from "react";
import { connect } from "react-redux";
import BingoCompletedListComponent from "./BingoCompletedListComponent";

const BingoCompletedListContainer = props => {
  return (
    <BingoCompletedListComponent
      completedList={props["completedBingoList" + props.player]}
    />
  );
};

export default connect(state => ({ ...state.bingoReducer }))(
  BingoCompletedListContainer
);
