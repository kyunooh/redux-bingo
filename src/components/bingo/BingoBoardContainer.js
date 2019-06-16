import React from "react";
import BingoBoardComponent from "./BingoBoardComponent";
import { connect } from "react-redux";

const BingoBoardContainer = props => {
  return (
    <BingoBoardComponent
      board={props["board" + props.player]}
      player={props.player}
    />
  );
};

export default connect(state => ({ ...state.bingoReducer }))(
  BingoBoardContainer
);
