import { applyMiddleware, combineReducers, createStore } from "redux";

import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  //chứa các state của ứng dụng
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
