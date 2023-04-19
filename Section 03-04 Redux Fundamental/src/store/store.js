import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(
  reducer,
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer({
      trace: true,
    })
  )
);

export default store;
