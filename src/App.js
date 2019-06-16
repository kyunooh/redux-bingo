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
        <div>1P</div>
        <BingoBoardContainer player={1} />
        <div>2P</div>
        <BingoBoardContainer player={2} />
      </div>
    </Provider>
  );
}

export default App;
