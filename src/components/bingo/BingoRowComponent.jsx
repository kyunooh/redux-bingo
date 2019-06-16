import React from 'react';
import BingoCellComponent from "./BingoCellComponent";

const BingoRowComponent = props => {
  return (
    <div>
      {props.row.map(cell => <BingoCellComponent cell={cell}/>) }
    </div>
  )
};


export default BingoRowComponent;