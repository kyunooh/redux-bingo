import React from "react";
import "./BingoCell.css";

const BingoCellComponent = props => {
  return (
    <div
      onClick={props.check}
      className={"cell" + (props.checked ? " checked" : "")}
    >
      {props.number + 1}
    </div>
  );
};

export default BingoCellComponent;
