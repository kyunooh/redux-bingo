import React from "react";
import BingoRowComponent from "./BingoRowComponent";

const BingoBoardComponent = props => {
  console.log(props)
  return (
    <div>
      {props.board.map(row => (
        <BingoRowComponent row={row} />
      ))}
    </div>
  );
};

export default BingoBoardComponent;
