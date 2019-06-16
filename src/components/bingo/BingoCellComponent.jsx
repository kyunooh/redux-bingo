import React from "react";
import "./BingoCell.css";

const BingoCellComponent = props => {
  if (props.isStart) {
    return (
      <div
        onClick={props.check}
        className={"cell" + (props.checked ? " checked" : "")}
      >
        <span className={"number"}>{props.number + 1}</span>
      </div>
    );
  }
  return <div className={"cell"}>&nbsp;</div>;
};

export default BingoCellComponent;
