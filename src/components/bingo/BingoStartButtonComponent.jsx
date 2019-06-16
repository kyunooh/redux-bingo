import React from "react";

const BingStartButtonComponent = props => {
  return (
    <button onClick={props.reset}>
      {props.isStart ? "게임 재시작" : "게임 시작"}
    </button>
  );
};

export default BingStartButtonComponent;
