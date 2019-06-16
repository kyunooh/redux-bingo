import React from "react";
import "./App.css";

import BingoBoardContainer from "./components/bingo/BingoBoardContainer";
import initializeStore from "./initializeStore";
import { Provider } from "react-redux";
import BingoStartButtonContainer from "./components/bingo/BingoStartButtonContainer";

const store = initializeStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BingoStartButtonContainer />
        <div>1P</div>
        <BingoBoardContainer player={1} />
        <div>2P</div>
        <BingoBoardContainer player={2} />
      </div>
    </Provider>
  );
}

export default App;
