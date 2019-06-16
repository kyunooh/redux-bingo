import React from "react";
import BingoCellContainer from "./BingoCellContainer";

const BingoRowComponent = props => {
  return (
    <div>
      {props.row.map((number, index) => (
        <BingoCellContainer key={index} number={number} player={props.player} />
      ))}
    </div>
  );
};

export default BingoRowComponent;
