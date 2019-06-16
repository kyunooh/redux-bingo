import React from "react";
import "./BingoCell.css"

const BingoCellComponent = props => {
  return (
    <div className={"cell " + (props.cell.checked ? " checked" : "")}>
      {props.cell.number}
    </div>
  );
};

export default BingoCellComponent;
