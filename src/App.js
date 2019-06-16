import React from "react";
import "./App.css";

import BingoBoardContainer from "./components/bingo/BingoBoardContainer";
import initializeStore from "./initializeStore";
import {Provider} from "react-redux";

const store = initializeStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <button>게임 시작</button>
        <div>A</div>
        <BingoBoardContainer player={"A"} />
        <div>B</div>
        <BingoBoardContainer player={"B"} />
      </div>
    </Provider>
  );
}

export default App;
