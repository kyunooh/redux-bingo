import { createStore } from "redux";
import reducers from "./reducers";

const initializeStore = () => {
  const store = createStore(reducers);
  return store;
};

export default initializeStore;
