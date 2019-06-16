import React from "react";
import { connect } from "react-redux";

const BingoCompletedListComponent = props => {
  return (
    <div>
      <p>완료된 빙고</p>
      {props.completedList.map(bingo => (
        <p>
          {bingo
            .split(",")
            .map(n => parseInt(n) + 1)
            .join(",")}
        </p>
      ))}
    </div>
  );
};

export default connect(state => ({ ...state.bingoReducer }))(
  BingoCompletedListComponent
);
