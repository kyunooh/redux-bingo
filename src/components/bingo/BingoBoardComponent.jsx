import React from "react";
import BingoRowComponent from "./BingoRowComponent";
import BingoCompletedListContainer from "./BingoCompletedListContainer";

const BingoBoardComponent = props => {
  return (
    <div>
      {props.board.map((row, index) => (
        <BingoRowComponent key={index} row={row} player={props.player} />
      ))}
      <BingoCompletedListContainer player={props.player} />
    </div>
  );
};

export default BingoBoardComponent;
